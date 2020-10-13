import React from "react";

export default function Input(props) {
    const {name,label,value,onChange,autoFocus,type}=props;
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                autoFocus={autoFocus}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                type={type}
                className="form-control"/>
        </div>
    )
}