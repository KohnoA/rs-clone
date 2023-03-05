import React from 'react'
import InputEdit from './InputEdit'

interface IAvatarListItem {
  className: string
  name: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  placeholder: string
  edit: boolean
}

const AvatarListItem: React.FC<IAvatarListItem> = ({ ...props }: IAvatarListItem) => {
  return (
    <li className={props.className}>
      {props.name}:
      {props.edit ? (
        <InputEdit
          value={props.value}
          onChange={props.onChange}
          type={props.type}
          placeholder={props.placeholder}
        />
      ) : (
        <span>{props.value}</span>
      )}
    </li>
  )
}

export default AvatarListItem
