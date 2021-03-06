'use strict'

const ingest_ctp = require('./functions/pipeline/ctp')
const ingest_us = require('./functions/pipeline/us')
const ingest_nyt = require('./functions/pipeline/nyt')
const ingest_apl = require('./functions/pipeline/apple')
const ingest_gog = require('./functions/pipeline/google')
const ingest_rt = require('./functions/pipeline/rtlive')
const ingest_can = require('./functions/pipeline/can')

module.exports = {
    ingest_ctp: ingest_ctp.run,
    ingest_us: ingest_us.run,
    ingest_nyt: ingest_nyt.run,
    ingest_apl: ingest_apl.run,
    ingest_gog: ingest_gog.run,
    ingest_rt: ingest_rt.run,
    ingest_can: ingest_can.run
}