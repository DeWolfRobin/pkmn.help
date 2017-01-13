const React = require("react")
const classes = require("./classes")

const $ = React.createElement

function makeOpt(opt) {
  return $("option", {
    key: opt,
    value: opt,
  }, opt)
}

function Dropdown(props) {
  const {options, onChange} = props
  const elements = options.map(makeOpt)
  const className = classes(
    "db w-100",
    "input-reset",
    "br3 ba b--black-30",
    "bg-white black",
    "pa2",
    "f4"
  )
  const onInput = event => {
    onChange(event.value)
  }
  return $("select", {className, onInput}, elements)
}

module.exports = Dropdown
