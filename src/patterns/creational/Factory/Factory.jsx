import React, { useState } from 'react';
import { Button, Input, Select,Checkbox } from 'antd';
import inputs from "./inputs.json"
import { createInput } from './createInput';

const Factory = () => {
  return (
    <>
      <div style={{marginTop:"100px", display:"grid", justifyContent:"center", width:"100%", gap:"5px"}}>
        Without Factory method

        <Input placeholder="input placeholder" />

        <Input placeholder="input placeholder" />

        <Button type="primary">Submit</Button>

        <Select
            defaultValue="lucy"
            style={{
                width: 120,
            }}
            //onChange={handleChange}
            options={[
                {
                value: 'jack',
                label: 'Jack',
                },
                {
                value: 'lucy',
                label: 'Lucy',
                },
                {
                value: 'disabled',
                disabled: true,
                label: 'Disabled',
                },
                {
                value: 'Yiminghe',
                label: 'yiminghe',
                },
            ]}
        />

        <Checkbox >Checkbox</Checkbox>

      </div>

      {/* <div style={{marginTop:"100px", display:"grid", justifyContent:"center", width:"100%", gap:"5px"}}>
        With Factory method
        { 
          inputs.map(input=> createInput(input))
        }

      </div> */}
    </>
  );
};
export default Factory;