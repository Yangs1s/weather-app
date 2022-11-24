import styled from '@emotion/styled'
import { GrMoney } from 'react-icons/gr'

const list = [
    {
        name:"USD",
        exchange:"13.55$"
    },
    {
        name:"KOR",
        exchange:"13.55$"
    },
    {
        name:"JPY",
        exchange:"13.55$"
    },
    {
        name:"CHN",
        exchange:"13.55$"
    },
    {
        name:"EUR",
        exchange:"13.55$"
    },
    {
        name:"BPD",
        exchange:"13.55$"
    },
]

const Exchange = () => {
    return (
        <Container>
            <div className="title_area">
                <h1 className="title">
                    EXCHANGE
                </h1>
                <GrMoney/>
            </div>
            <div className="exchange_area">
                <ul className="exchange_list">
                    {list.map((item,index)=>{
                        return(
                        <li key={index}>
                            {item.name}&nbsp;:&nbsp;<span>{item.exchange}</span> 
                        </li>)
                    })}
                </ul>
            </div>
        </Container>
    );
};

export default Exchange;

const Container = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    color:#fff;
    border-radius: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar-thumb{
        
    }
    svg{
        margin-left: 5px;
        path{
            stroke: rgb(255,255,255);
        }
    }
    .title_area{
        display: flex;
        align-items: center;
        font-size: 30px;
        padding: 15px 10px 0px;
        color:#fff;
        .title{
            margin: 0;
            font-size: 30px;
            font-weight: bold;
        }
    }
    .exchange_area{
        display: flex;
        .exchange_list{
            display: flex;
            flex-direction: column;
            list-style: none;
            padding: 0;

        border-top: 1px solid #fff;
            li{
                width: 300px;
                font-size: 1.3rem;
                
                margin:0;
                padding: 22px 12px;
                border-bottom: 1px solid #fff;
            }
        }
    }
`