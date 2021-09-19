// import { info } from "node-sass";
import React from "react";

export default class ErrorBoundary extends React.Component{
    state={
        hisError:false
    }
    componentDidCatch(error, info){
        this.setState({
            hisError:true
        })
    }
    render(){
        if(this.state.hisError){
            return <> 
            <div className='error-main'>
               
            </div>
             <h1 style={{color:'red', position:"absolute", top:'40%' , left:'40%',  border:'1px solid', padding:'50px 50px'}}>
                    Ops this is error!
                </h1>
                </> 
        }
        return this.props.children
    }

}