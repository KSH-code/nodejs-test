module.exports = (time) => {
  if (require('../Require').getTime() !== time) console.error(`require('../Require').getTime() !== time`)
  if (require('../require').getTime() !== time) console.error(`require('../require').getTime() !== time`)
}