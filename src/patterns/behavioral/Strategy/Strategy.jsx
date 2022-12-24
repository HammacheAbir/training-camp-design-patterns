
import React, {useState, useMemo} from "react"
import { Switch } from 'antd';
import { List } from 'antd';
import { EN, FR } from "./translate";

const Strategy = () =>{
    const [lang, setLang] = useState('EN')

    const onChange = ()=>{
        if(lang === "EN") setLang("FR")
        else setLang("EN")
    }

    const Texts = useMemo(()=>{
        if(lang ==="FR") return FR
        else return EN
    },[lang])

    const translate = (id) =>{
        return Texts[id]
    }

    const data = [
        'item1','item2','item3',
      ];

    return <>
        FR <Switch onChange={onChange} checked={lang==="EN"} /> EN

        <div style={{marginTop:"20px"}}>

            <List
                header={<div>Header</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                    {translate(item)}
                    </List.Item>
                )}
            />
        </div>
    </>


}

export default Strategy