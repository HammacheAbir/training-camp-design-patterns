import { Button, Input, Select,Checkbox } from 'antd';

export const createInput=(inputProps)=>{

    switch (inputProps.type) {
        case "input":
                return <Input placeholder={inputProps.meta.placeholder} />
            break;
        case "checkbox":
                return <Checkbox >{inputProps.label}</Checkbox>
            break;
        case "select":
                return <Select
                defaultValue={inputProps.meta.defaultValue}
                style={{...inputProps.meta.style}}
                options={inputProps.meta.options}
            />
            break;

        case "button":
                return <Button type={inputProps.meta.type}>{inputProps.label}</Button>
            break;
    
        default:

            break;
    }

}