import React from 'react'

function Price() {
    return (
        <div>
        <div className="gb-headline gb-py-0 gb-layout-headline">
        <h2 className="gb-headline_title">2. Domain Name Connection</h2>
        <p className="gb-mt-2 gb-mt-lg-1 gb-text-reset">
            Connect a domain to your hosting plan
        </p>
        
            
        </div>
        <aside className="hosting-specs_wrapper gb-layout_aside">
            <div className="hosting-specs">
                <header className="hosting-specs_header"></header>
                <div className="hosting-speces_specs">
                    <h3 className="hosting-specs_product-name">Shared hosting</h3>
                    <ul className="hosting-specs_list gb-list-unstyled">
                        <li className="hosting-specs_item">
                            <b className="hosting-specs_item-title">Disk space</b>
                            <p className="hosting-specs_item-value">20 GB SSD</p>
                        </li>
                        <li className="hosting-specs_item">
                            <b className="hosting-specs_item-title">Bandwidth</b>
                            <p className="hosting-specs_item-value">Unmetered</p>
                        </li>
                        <li className="hosting-specs_item">
                            <b className="hosting-specs_item-title">Websites</b>
                            <p className="hosting-specs_item-value">3 Websites</p>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        <div className="gb-layout_header">
            <b>Connect to</b>
            <div className="aditional-services_holder">
                <div className="aditional-services_item aditional-services_item-radio">
                    <input type="radio" name="connect-to" id="connect-to new-domain" value="new-domain" className="aditional-services_input"/>
                    <label for="connect-to-new-domain" className="aditional-services">
                        <span className="aditional-services_text">New Domain Name</span>
                        <span className="aditional-services_price gb-text-uppercase"></span>
                    </label>
                </div>
                <div className="aditional-services_item aditional-services_item-radio">
                    <input type="radio" name="connect-to" id="connect-to new-domain" value="new-domain" className="aditional-services_input"/>
                    <label for="connect-to-new-domain" className="aditional-services">
                        <span className="aditional-services_text">Existing Domain Name</span>
                        <span className="aditional-services_price gb-text-uppercase"></span>
                    </label>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Price
