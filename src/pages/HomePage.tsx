import * as React from 'react';

interface ITablePageProps {
   params:any;  
   location:any;
}

interface ITablePageState {
    
    isShow: boolean
}

export default class HomePage extends React.Component<ITablePageProps, ITablePageState> {

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
           <div>hom page</div>
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