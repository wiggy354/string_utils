import React from 'react';
import '../common.css';
import './sideBarMenu.css';
import collapseIcon from '../../icons/chevrons-left.png';
import expandIcon from '../../icons/chevrons-right.png';

class SideBarMenu extends React.Component {
    // Define menu on-screen state
    MenuScreenState = {
        COLLAPSED: 1,
        EXPANDED: 2
    };

    titleIcon;
    titleText;
    menuItems;
    state = {menuState: this.MenuScreenState.EXPANDED};

    constructor(props) {
        super(props);
        this.titleIcon = props.titleIcon;
        this.titleText = props.titleText;
        this.menuItems = props.menuItems;
    }

    expandMenu = () => {
        this.setState({menuState: this.MenuScreenState.EXPANDED});
    };

    collapseMenu = () => {
        this.setState({menuState: this.MenuScreenState.COLLAPSED});
    };

    renderHeader() {
        let header;

         if (this.state.menuState === this.MenuScreenState.EXPANDED) {
            header =
                <div className="menuHeaderExpanded">
                    <div className="headerIconExpanded">
                        <img src={this.titleIcon} alt="header icon"/>
                    </div>
                    <div className="headerText">
                        {this.titleText}
                    </div>
                </div>
        } else {
            header =
                <div className="menuHeaderCollapsed">
                    <div className="headerIconCollapsed">
                        <img src={this.titleIcon} alt="header icon"/>
                    </div>
                </div>
        }

        return header
    }

    renderContent() {
        let content = [];
        if (this.state.menuState === this.MenuScreenState.EXPANDED) {
            for (let i = 0; i < this.menuItems.length; i++) {
                let altText = "Opt " + i;
                content.push(
                    <div className="menuItem">
                        <div className="menuItemIcon">
                            <img src={this.menuItems[i].icon} alt={altText}/>
                        </div>
                        <div className="menuItemText">
                            {this.menuItems[i].text}
                        </div>
                    </div>
                )
            }
        } else {
            for (let i = 0; i < this.menuItems.length; i++) {
                content.push(
                    <div className="menuItem">
                        <div className="menuItemIcon">
                            <img src={this.menuItems[i].icon} alt="Menu Icon {i}"/>
                        </div>
                    </div>
                )
            }
        }

        return (
            <div className="menuContent">
                {content}
            </div>
        );
    }

    renderFooter() {
        let footer;

        if (this.state.menuState === this.MenuScreenState.EXPANDED) {
            footer =
                <div className="menuFooter">
                    <div className="menuFooterControl" onClick={this.collapseMenu}>
                        <img src={collapseIcon} alt="shrink menu"/>
                    </div>
                </div>
        } else {
            footer =
                <div className="menuFooter">
                    <div className="menuFooterControl" onClick={this.expandMenu}>
                        <img src={expandIcon} alt="shrink menu"/>
                    </div>
                </div>
        }

        return footer;
    }

    render() {
        // Create menu header
        let menuHeader = this.renderHeader();

        // Build menu items
        let menuContent = this.renderContent();

        // Create menu footer
        let menuFooter = this.renderFooter();

        let styling = (this.state.menuState === this.MenuScreenState.EXPANDED ? "sideBarMenuExpanded" : "sideBarMenuCollapsed");

        return (
            <div className={styling}>
                {menuHeader}
                {menuContent}
                {menuFooter}
            </div>

        )
    }
}

export default SideBarMenu