// ==UserScript==
// @name         Youtube BG Community Helper
// @namespace    http://tampermonkey.net/
// @version      0.10
// @description  try to take over the world!
// @author       ga2mer
// @require https://raw.githubusercontent.com/lodash/lodash/4.17.4/dist/lodash.js
// @match        https://www.youtube.com/*
// @connect      worker.buzz.guru
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

function getQueryParams(url){
    var qparams = {},
        parts = (url||'').split('?'),
        qparts, qpart,
        i=0;

    if(parts.length <= 1 ){
        return qparams;
    }else{
        qparts = parts[1].split('&');
        for(i in qparts){

            qpart = qparts[i].split('=');
            qparams[decodeURIComponent(qpart[0])] =
                decodeURIComponent(qpart[1] || '');
        }
    }

    return qparams;
};

function humanToNubmer(text) {
    const unshortRegex = /(\d+\.?\d*)([  KMBмлнтысрд]+)/gmi;
    const factor = {
        K: 1000,
        M: 1000000,
        B: 1000000000,
        'млрд': 1000000000,
        'млн': 1000000,
        'тыс': 1000,
    };
    const shortenArray = unshortRegex.exec(text);
    const numberAsString = shortenArray[1];
    const number = parseFloat(numberAsString);
    const lastSymbol = shortenArray[2].trim();
    if (factor) {
        return Math.round(number * factor[lastSymbol]);
    }
    return number;
}

function median(values){
    if(values.length ===0) return 0;

    values.sort(function(a,b){
        return a-b;
    });

    var half = Math.floor(values.length / 2);

    if (values.length % 2)
        return values[half];

    return (values[half - 1] + values[half]) / 2.0;
}

const BROWSE_URL = 'https://www.youtube.com/youtubei/v1/browse?key=AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';

const dateAllow = ['7 day', '8 day', '9 day', '10 day', '11 day', '12 day', '13 day', 'week', '1 month ago', '2 months ago', '3 months ago', '4 months ago'];
const dateDisallow = ['months', 'year', 'years'];
let table = [];
(function() {
    'use strict';
    const element = document.createElement('div');
    const status = document.createElement('div');
    const result = document.createElement('div');
    const resultText = document.createElement('div');
    const resultCopy = document.createElement('button');
    resultCopy.innerText = 'Copy table';
    result.appendChild(resultText);
    result.appendChild(resultCopy);
    resultCopy.addEventListener('click', async () => {
        const excelData = table
        .map(lines => lines.join("\t"))
        .join("\n");
        navigator.clipboard.writeText(excelData);
    });
    element.style.zIndex = 99999;
    element.style.position = 'fixed';
    element.style.right = '10px';
    element.style.bottom = '10px';
    element.style.visibility = 'hidden';
    status.style.background = 'white';
    status.style.position = 'fixed';
    status.style.bottom = '10px';
    status.style.left = '10px';
    status.style.padding = '10px';
    status.style.borderRadius = '10px';
    status.style.visibility = 'hidden';
    result.style.background = 'white';
    result.style.maxWidth = '50%';
    result.style.position = 'fixed';
    result.style.bottom = '10px';
    result.style.left =' 50%';
    result.style.transform = 'translateX(-50%)';
    result.style.padding = '10px';
    result.style.borderRadius = '10px';
    result.style.visibility = 'hidden';
    const button2 = document.createElement('button');
    const button1 = document.createElement('button');
    const button4 = document.createElement('button');
    const button3 = document.createElement('button');
    button1.innerText = 'Get data for 1';
    button2.innerText = '2';
    button4.innerText = '4 months';
    button3.innerText = 'Download trends';
    const downloadTrends = async () => {
        const filename = "YT_NAVIGATOR_DUMP.csv";

        const rows = [
            ["Название канала", "Ссылку на канал", "Название видео", "Ссылка на видео"],
        ];

        let items = [];

        const channelResponse = await unsafeWindow.fetch('https://www.youtube.com/feed/trending').then(res => res.text());
        const [json] = channelResponse.match(/(?<=var ytInitialData\s=\s)(.*?)(?=;<\/script>)/) || [];
        const ytInitialData = JSON.parse(json);
        const arr = ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents;
        arr.forEach(el => {
            if (!el.itemSectionRenderer.contents[0].shelfRenderer.title) {
                items.push(...el.itemSectionRenderer.contents[0].shelfRenderer.content.expandedShelfContentsRenderer.items);
            }
        });
        items.forEach((item) => {
            const channelTitle = item.videoRenderer.longBylineText.runs[0].text;
            const channelUrl = `https://www.youtube.com/channel/${item.videoRenderer.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer.navigationEndpoint.browseEndpoint.browseId}`;
            const videoTitle = item.videoRenderer.title.runs[0].text;
            const videoUrl = `https://www.youtube.com/watch?v=${item.videoRenderer.navigationEndpoint.watchEndpoint.videoId}`;

            rows.push([channelTitle,channelUrl,videoTitle,videoUrl]);
        });

        var blob = new Blob([rows.map(e => e.join(";")).join("\n")], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, filename);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", filename);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
    const onClick = async (count) => {
        status.style.visibility = 'inherit';
        status.innerHTML = '<div>Собираем информацию об аккаунте</div>';
        let channelId, title, link, email, country, subscribers;
        let links = [];
        try {
            let pathName = document.location.pathname;
            // const isC = pathName === '/c';
            // const isChannel = pathName === '/channel';
            // const isUser = pathName === '/user';
            const isChannelHTML = !!document.querySelector('ytd-browse[role="main"] #channel-header');
            console.log({ /* isC, isChannel, isUser, */ isChannelHTML, pathName})
            if (/* isC || isChannel || isUser || */ isChannelHTML) {
                const f = document.querySelector('ytd-browse[role="main"] form#form');
                console.log(f);
                if (f && f.action) {
                    console.log('action', f.action);
                    pathName = new URL(f.action).pathname;
                }
            }
            let url;
            if (pathName.includes('/search')) {
                url = pathName.replace(/\/search$/, '/about');
            } else {
                const pathAndId = /\/(c|channel|user)\/([^\/?#\s()]+)/.exec(decodeURIComponent(pathName));
                url = `/${pathAndId[1]}/${pathAndId[2]}/about`;
            }
            if (!url) {
               status.innerHTML += '<div><strong>Проблемы с ссылкой</strong></div>';
               throw 'нету юрл';
            }
            console.log('url', url);
            const channelResponse = await unsafeWindow.fetch(url).then(res => res.text());
            const [, json2] = channelResponse.match(/(?<=var ytInitialData\s=\s)(.*?)(?=;<\/script>)/) || [];
            const ytInitialResponse = JSON.parse(json2);
            const metadata = ytInitialResponse.metadata.channelMetadataRenderer;
            channelId = metadata.externalId;
            try {
                GM_xmlhttpRequest({ // eslint-disable-line no-undef
                    method: 'GET',
                    url: 'https://worker.buzz.guru/api/channel_page?providerId=' + channelId,
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                });
            } catch (e) {console.log(e)}
            title = metadata.title;
            link = metadata.channelUrl + '/videos';
            const description = metadata.description || '';
            const emailInDescription = /(\S+@\S+\.\S+)/.exec(description);
            if (emailInDescription) {
                email = emailInDescription[0];
            }
            const tabs = window._.get(ytInitialResponse, 'contents.twoColumnBrowseResultsRenderer.tabs', []);
            const aboutTab = window._.find(tabs, tab => window._.get(tab, 'tabRenderer.selected', false));
            country = window._.get(aboutTab, 'tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].channelAboutFullMetadataRenderer.country.simpleText', null);
            const rawLinks = window._.get(aboutTab, 'tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].channelAboutFullMetadataRenderer.primaryLinks', []);
            links = rawLinks.map((link) => {
                const originalUrl = window._.get(link, 'navigationEndpoint.urlEndpoint.url');

                if (
                    originalUrl.includes('http')
                    && !originalUrl.includes('https://www.youtube.com/redirect')
                ) {
                    return originalUrl;
                }
                const { q } = getQueryParams(originalUrl);

                if (!q) {
                    return originalUrl;
                }
                return q;
            });
            const subscribersText = window._.get(ytInitialResponse, 'header.c4TabbedHeaderRenderer.subscriberCountText.simpleText', '').replace(',', '.');
            if (subscribersText) {
                subscribers = humanToNubmer(subscribersText);
            }
        } catch (e) {
            console.err(e);
            status.innerHTML += '<div><strong>Произошла ошибка</strong></div>';
            return false;
        }
        try {
            const strIC = JSON.stringify(unsafeWindow.ytcfg.get('INNERTUBE_CONTEXT'));
            const INNERTUBE_CONTEXT = JSON.parse(strIC);
            window._.set(INNERTUBE_CONTEXT, 'client.hl', 'en');
            let continuationToken;
            const videosViews = [];
            status.innerHTML += `<div>Собираем информацию о видео за ${count} месяца</div>`;
            do {
                const bodyParams = {
                    context: INNERTUBE_CONTEXT,
                };
                if (continuationToken) {
                    bodyParams.continuation = continuationToken;
                } else {
                    bodyParams.browseId = channelId;
                    bodyParams.params = "EgZ2aWRlb3M%3D";
                }
                const res = await fetch(BROWSE_URL, {
                    method: 'POST',
                    mode: 'same-origin',
                    headers: {
                        'content-type': 'application/json',
                        'x-goog-authuser': 0,
                        'x-goog-pageid': unsafeWindow.ytcfg.get('DELEGATED_SESSION_ID'),
                        'x-goog-visitor-id': unsafeWindow.ytcfg.get('VISITOR_DATA'),
                        'x-origin': 'https://www.youtube.com',
                        'x-youtube-client-name': unsafeWindow.ytcfg.get('INNERTUBE_CONTEXT_CLIENT_NAME'),
                        'x-youtube-client-version': unsafeWindow.ytcfg.get('INNERTUBE_CONTEXT_CLIENT_VERSION'),
                    },
                    body: JSON.stringify(bodyParams),
                }).then(res => res.json());
                let items = [];
                const tabs = window._.get(res, 'contents.twoColumnBrowseResultsRenderer.tabs');
                if (tabs) {
                    const videoTab = window._.find(tabs, tab => window._.get(tab, 'tabRenderer.selected', false));
                    items = window._.get(videoTab, 'tabRenderer.content.sectionListRenderer.contents[0].itemSectionRenderer.contents[0].gridRenderer.items');
                } else {
                    items = window._.get(res, 'onResponseReceivedActions[0].appendContinuationItemsAction.continuationItems');
                }
                let stop = false;
                items.forEach((item, index) => {
                    continuationToken = window._.get(item, 'continuationItemRenderer.continuationEndpoint.continuationCommand.token', null);
                    if (continuationToken) return;
                    const publishedText = window._.get(item, 'gridVideoRenderer.publishedTimeText.simpleText');
                    if (publishedText) {
                        const viewCountText = window._.get(item, 'gridVideoRenderer.viewCountText.simpleText');
                        const videoTitle = window._.get(item, 'gridVideoRenderer.title.runs.0.text') || '';
                        const isShorts = videoTitle.includes('#shorts');
                        // if (!viewCountText) throw '!viewCountText';
                        const dAllow = [...dateAllow];
                        if (count === 1) {
                            dAllow.splice(-3);
                        }
                        if (count === 2) {
                            dAllow.splice(-2);
                        }
                        if (!dAllow.some(it => publishedText.includes(it)) && dateDisallow.some(it => publishedText.includes(it))) {
                            stop = true;
                        }
                        if (dAllow.some(it => publishedText.includes(it)) && !isShorts) {
                            videosViews.push(Number(viewCountText.replace(/\D+/g, '')))
                        }
                    }
                });
                if (stop) break;
            } while (continuationToken);
            const avgViews = Math.round(Math.round(median(videosViews)) / 100) * 100 || '';
            status.innerHTML += '<div><strong>Собрано</strong></div>';
            table = [[title, link, email || '', '"' + links.join("\n") + '"', country || '', '', '', subscribers || '', avgViews]]
            resultText.innerHTML = `<strong>USERNAME</strong>: <div>${title}</div>
            <strong>LINK</strong>: <div>${link}</div>
            <strong>EMAIL</strong>: <div>${email || ''}</div>
            <strong>OTHER CONTACT</strong>: <div>${links.join(', ')}</div>
            <strong>COUNTRY</strong>: <div>${country || ''}</div>
            <strong>LANGUAGE</strong>: <div></div>
            <strong>CONTENT</strong>: <div></div>
            <strong>SUBSCRIBERS</strong>: <div>${subscribers || ''}</div>
            <strong>AV.VIEWS</strong>: <div>${avgViews}</div>`;
            result.style.visibility = 'inherit';
            console.log(table, {
                title,
                link,
                email,
                country,
                links,
                subscribers,
                avgViews,
            });
        } catch (e) {
            console.err(e);
            status.innerHTML += '<div><strong>Произошла ошибка</strong></div>';
        }
    };
    button1.addEventListener('click', onClick.bind(this, 1));
    button2.addEventListener('click', onClick.bind(this, 2));
    button4.addEventListener('click', onClick.bind(this, 4));
    button3.addEventListener('click', downloadTrends.bind(this, 3));
    element.appendChild(button1);
    element.appendChild(button2);
    element.appendChild(button4);
    element.appendChild(button3);
    element.appendChild(status);
    element.appendChild(result);
    document.addEventListener('yt-navigate-finish', (e) => {
        const pathName = document.location.pathname;
        const isC = pathName === '/c';
        const isChannel = pathName === '/channel';
        const isUser = pathName === '/user';
        const containsC = pathName.startsWith('/c/');
        const containsChannel = pathName.startsWith('/channel/');
        const containsUser = pathName.startsWith('/user/');
        const isChannelHTML = !!document.querySelector('ytd-browse[role="main"] #channel-header');
        if (isC || isChannel || isUser || containsC || containsChannel || containsUser || isChannelHTML) {
            console.log({ isChannelHTML });
            element.style.visibility = 'visible';
            status.style.visibility = 'hidden';
            result.style.visibility = 'hidden';
        } else {
            element.style.visibility = 'hidden';
        }
    });
    window.onload = () => {
        document.body.appendChild(element);
    };
})();
