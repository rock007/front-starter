import * as React from 'react';

import { Button } from 'react-weui';

interface ITablePageProps {
   params:any;  
   location:any;
}

interface ITablePageState {
    
    isShow: boolean
}

export default class AboutPage extends React.Component<ITablePageProps, ITablePageState> {

    query: any
       
    refs: {
        [string: string]: any;
    
    }

   constructor(props : ITablePageProps) {
        super(props);
      
    }
     
    public componentDidMount() {

        var {query}  = this.props.location;
        console.log("query:"+JSON.stringify(query));

       
   }
    componentWillUnmount() {

          console.log("tablePage:componentWillUnmount");
    }

    render() {
        return (
           <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
        
        <Button>ddddddddddddddd</Button>
          <br />
          Really
          <br />...<br />...<br />...<br />
          long
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />...
          <br />...<br />...<br />...<br />...<br />...<br />
          content
        </div>
        )
    }

    

     showDialog = () => {

         // this.setState({ isShow:true });
    }

    onOk = () => {
        this.setState({ isShow: false });
    }

    onCancel = () => {
        this.setState({ isShow: false });
    }
}