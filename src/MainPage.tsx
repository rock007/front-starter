import * as React from 'react'
import {Switch, Route, Redirect, withRouter,RouteComponentProps} from 'react-router-dom'
import './App.css';
import logo from './logo.svg';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

import { Button , Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

interface ILayoutProps {
    history: any,
    location: any
}

interface ILayoutState {
    showAppMenu: boolean,
    isChangePwdPop:boolean,
    isOpen: boolean
}

/**
 * The main application view and routes
 */
class MainPage extends React.Component<RouteComponentProps<ILayoutProps>, ILayoutState> {

    public state = {
        showAppMenu: false,
        isChangePwdPop:false,
        isOpen: false
    }

   private  toggleAppMenu = () => {
        this.setState({ showAppMenu: !this.state.showAppMenu });
    }

    private onHideAppMenu = () => {
        this.setState({ showAppMenu: false });
    }

    private navigate = (node:any) => {

        if(node.isLeaf()&&(node.getId()as string).startsWith('/')){
            this.setState({ showAppMenu: false });
            this.props.history.push(node.getId());
        }

    }

    private handler_logoff(){

        // AppContent.Token="";
        this.props.history.replace('/login');
    }

    componentDidMount() {

    }


    render() {
/** 
        var isNoLogin=m1==null||m1==''||m1=='undefined';
        if(isNoLogin&&(window.location.href.substr( window.location.href.lastIndexOf("/"))!="/login")){

            this.props.history.replace('/login');

        }else if(isNoLogin==false&&(window.location.href.substr( window.location.href.lastIndexOf("/"))=="/login")){
           
            this.props.history.replace('/');
        }
***/
        return (
            <div className="App">
              
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Let's Begin</h1>
              </header>
              <p className="App-intro">
                To get started, edit <code>src/App.tsx</code> and save to reload.
              </p>
              <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggleAppMenu} />
          <Collapse isOpen={this.state.showAppMenu} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
            <Switch>
                    <Route path="/" component={HomePage } exact/>
                    <Route path="/about" component={AboutPage }/>
                    <Redirect path="*" to="/" />
            </Switch>

             <div>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>
            </div>
      
          );

    }
}

export default withRouter(MainPage);