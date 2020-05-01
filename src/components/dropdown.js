import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const location = [
  { key: 'Yes', value: 'Yes', text: 'Yes' },
]

const DropdownComponent = () => (
  <Dropdown
    placeholder='No'
    fluid
    search
    selection
    options={location}
    icon='dropdown'
    compact={false}
  />
)

export default DropdownComponent
