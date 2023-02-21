import './index.css'
import React from 'react'
import Select, {components} from 'react-select'
import {Link} from 'react-router-dom'

class SearchDropDown extends React.Component {
  render() {
    const {selected, onChange, options} = this.props

    const ValueContainer = ({children, ...props}) =>
      components.ValueContainer && (
        <components.ValueContainer {...props}>
          {!!children && (
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="search-icon"
              aria-hidden="true"
              style={{position: 'absolute', left: 6}}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6561 10.0596H11.3144L14.8477 13.6096C15.1894 13.9512 15.1894 14.5096 14.8477 14.8512C14.5061 15.1929 13.9477 15.1929 13.6061 14.8512L10.0644 11.3096V10.6512L9.8394 10.4179C8.67274 11.4179 7.08107 11.9346 5.3894 11.6512C3.07274 11.2596 1.22274 9.32625 0.939405 6.99292C0.506071 3.46792 3.47274 0.50125 6.99774 0.934583C9.33107 1.21792 11.2644 3.06792 11.6561 5.38458C11.9394 7.07625 11.4227 8.66792 10.4227 9.83458L10.6561 10.0596ZM2.56421 6.30957C2.56421 8.38457 4.23921 10.0596 6.31421 10.0596C8.38921 10.0596 10.0642 8.38457 10.0642 6.30957C10.0642 4.23457 8.38921 2.55957 6.31421 2.55957C4.23921 2.55957 2.56421 4.23457 2.56421 6.30957Z"
                fill="#94a3b8"
              />
            </svg>
          )}
          {children}
        </components.ValueContainer>
      )

    const DropdownIndicator = props =>
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="search-icon"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.6561 10.0596H11.3144L14.8477 13.6096C15.1894 13.9512 15.1894 14.5096 14.8477 14.8512C14.5061 15.1929 13.9477 15.1929 13.6061 14.8512L10.0644 11.3096V10.6512L9.8394 10.4179C8.67274 11.4179 7.08107 11.9346 5.3894 11.6512C3.07274 11.2596 1.22274 9.32625 0.939405 6.99292C0.506071 3.46792 3.47274 0.50125 6.99774 0.934583C9.33107 1.21792 11.2644 3.06792 11.6561 5.38458C11.9394 7.07625 11.4227 8.66792 10.4227 9.83458L10.6561 10.0596ZM2.56421 6.30957C2.56421 8.38457 4.23921 10.0596 6.31421 10.0596C8.38921 10.0596 10.0642 8.38457 10.0642 6.30957C10.0642 4.23457 8.38921 2.55957 6.31421 2.55957C4.23921 2.55957 2.56421 4.23457 2.56421 6.30957Z"
              fill="#94a3b8"
            />
          </svg>
        </components.DropdownIndicator>
      )

    const customStyles = {
      control: (base, state) => ({
        ...base,
        background: '#1f1f30',
        color: '#94A3B8',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '8px',
        padding: '6px 5px',
        border: '1px solid #21274F !important',
        borderColor: state.isFocused ? 'yellow' : 'green',
        boxShadow: 'none',
        '&:focus': {
          border: '0 !important',
        },
      }),
      menu: base => ({
        ...base,
        // override border radius to match the box
        borderRadius: 0,
        // kill the gap
        marginTop: 0,
        backgroundColor: '#1f1f30',
        color: '#94A3B8',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 16,
      }),
      menuList: base => ({
        ...base,
        // kill the white space on first and last option
        padding: 0,
      }),
      multiValue: base => ({
        ...base,
        backgroundColor: 'blue',
        color: 'white',
      }),
      valueContainer: base => ({
        ...base,
        paddingLeft: 50,
      }),
      option: styles => ({
        ...styles,
        color: '#94A3B8',
        backgroundColor: '#1F1F30',
        borderBottom: '0.3px solid #64748B',
        fontSize: 15,
        padding: 14,
        ':hover': {
          border: '1px solid #94A3B8',
        },
      }),
      input: styles => ({
        ...styles,
        color: '#94a3b8',
      }),
      placeholder: styles => ({
        ...styles,
        color: '#94A3B8',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 15,
      }),
      singleValue: (state, styles) => ({
        ...styles,
        ...state,
        color: '#94a3b8',
        border: state.isFocused ? '1px solid #94A3B8' : null,
      }),
    }

    /* const customSingleValue = () => (
      <div className="input-select">
        <div className="input-select__single-value">
          {options.label && (
            <span className="input-select__icon">{options.value}</span>
          )}
          <span>{options.label}</span>
        </div>
      </div>
    ) */

    return (
      <div className="dropdown-container">
        <Select
          value={selected}
          onChange={onChange}
          options={options}
          placeholder="Enter the state"
          styles={customStyles}
          components={{
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null,
            ValueContainer,
            // SingleValue: customSingleValue,
          }}
        />
      </div>
    )
  }
}

export default SearchDropDown
