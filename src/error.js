/* eslint-disable strict */

'use strict';


const events = require('./modules/events.js');


function log(event, payload) {
  let errorTime = new Date();
  console.log({ event, errorTime, payload });
}

events.on('error', log);