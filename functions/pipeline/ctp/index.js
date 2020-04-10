'use strict'

const fetch = require('node-fetch')
const moment = require('moment')
const parse = require('csv-parse/lib/sync')
const { Datastore } = require('../../../utils')

// Import the pipeline config
const config = require('../../../pipelineconfig.json')

// Import the schema for this data source
const schema = require('./schema.json')

/**
  * ETL for The Covid Tracking Project data
  * @author Matt Hrushka <c19@hru.sh>
*/
module.exports.run = async _ => {

  // Fetch the data from the "state" historical data endpoint
  const response = await fetch(config.sources.ctp.dataUrl)
  const input = await response.text()

  const records = parse(input, {
    columns: true,
    skip_empty_lines: true
  })

  const t_s = moment().unix() * 1000

  // Initialize Database if it hasn't been
  await Datastore.init(schema)
  await Datastore.insert(schema,records)

  const t_e = moment().unix() * 1000

  return {success:true, milliseconds:t_e-t_s}
 
}