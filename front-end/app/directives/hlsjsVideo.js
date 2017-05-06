/*
 * hljsVideo.js will initialize a hls.js video player to play streaming video from a video server url that is compatible with the html5 <video> tag
 * Copyright (C) 2017 Jeff Patterson, Amanda Murphy, Paolo Villanueva, Patrick Overton, Connor Picken, Yun Cong Chen, Seth Amundsen
 * Michael Ohl, Mathew Tighe
 *
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either vesion 2 of the License, or (at our option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY of FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * ALL RIGHTS RESERVED
 * This program is licensed under the "GNU General Public License"
 * Please see the file COPYING in the source
 * distribution of this software for license terms.
 */

'use strict'

angular.module("rvtk").directive("hlsjsVideo", function() {
    return {
        restrict: 'E',
        scope: {},
        controller: ['$scope', function hlsjsVideoController($scope) {
            if(Hls.isSupported()) {
                var video = document.getElementById('video');
                var hls = new Hls();
                hls.loadSource('https://paolo215.paolov435.com/hls/live.m3u8');
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED,function() {
                    video.play();
                });
            }
        }],
        templateUrl: 'directives/hlsjsVideo.html'
    }
});