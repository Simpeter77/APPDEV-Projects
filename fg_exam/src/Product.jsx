import PropTypes from 'prop-types';
export default function Product(Prop){
    return(
        <div className='outer'>
            <div className="inner">
            <img src={Prop.image} alt="" />
            <h1>Model: {Prop.model}</h1>
            <h3>{Prop.overview}</h3>
            <h3>Specification: </h3>
            <ul>
                <li><b>Switch Type: </b>{Prop.switchType}</li>
                <li><b>Key Layout: </b>{Prop.layout}</li>
                <li><b>Backligthing: </b>{Prop.backlight}</li>
                <li><b>Connectivity: </b>{Prop.connectivity}</li>
                <li><b>Dimensions: </b>{Prop.dimension}</li>
                <li><b>Weight: </b>{Prop.weight}</li>
                <li><b>Cable length: </b>{Prop.cableLength}</li>
                <li><b>Additional Features: </b>{Prop.additional}</li>
            </ul>
            <h3>In the box: </h3>
            <ul>
                <li>KB-X1000 Keyboard</li>
                <li>USB Cable</li>
                <li>User Manual</li>
                <li>Keycap Removal Tool</li>
                <li>Warranty Card</li>
            </ul>
            <h3>Key Features:</h3>
            <p>
                <b>Customizable RGB Backlighting:</b> Personalize the keyboard’s illumination with a wide range of colors 
                and lighting effects. <br />
                <b>Mechanical Switches:</b> Cherry MX Red switches for a responsive and smooth typing experience. <br />
                <b>Programmable Keys:</b> Assign macros and custom functions to any key with the included software. <br />
                <b>Anti-Ghosting & N-Key Rollover:</b> Ensure accurate keypress registration during intense gaming 
                sessions. <br />
                <b>Dedicated Media Controls:</b> Easily control music and videos with dedicated media keys.
            </p>
            <h3>Setup Instructions:</h3>

            <h4>Unboxing:</h4>
            <ul>
                <li>Carefully remove the keyboard and accessories from the box.</li>
            </ul>

            <h4>Connecting the Keyboard:</h4>
            <ul>
                <li>Plug the USB cable into an available USB port on your computer.</li>
                <li>The keyboard should be automatically recognized and ready for use. No additional drivers are required.</li>
            </ul>

            <h4>Software Installation (Optional):</h4>
            <ul>
                <li>Download the configuration software from the manufacturer’s website if you wish to customize key functions or lighting.</li>
                <li>Follow the on-screen instructions to install the software.</li>
            </ul>

            <h4>Keycap Removal and Replacement</h4>
            <ul>
                <li>Use the included keycap removal tool to gently pry off keycaps for cleaning or replacement.</li>
                <li>Replace keycaps by aligning them over the switch and pressing down until they click into place.</li>
            </ul>

            <h3>Using the Keyboard</h3>
            <h4>Basic Typing:</h4>
            <ul>
                <li>Simply start typing; the keyboard is pre-configured with standard key mappings.</li>
            </ul>

            <h4>Customizing Backlighting:</h4>
            <ul>
                <li>Press Fn + F9 to cycle through preset lighting effects.</li>
                <li>Use the configuration software to create custom lighting profiles.</li>
            </ul>
            <h4>Programming Keys:</h4>
            <ul>
                <li>Open the configuration software.</li>
                <li>Select the key you want to program.</li>
                <li>Assign a macro or function and save your changes.</li>
            </ul>

            <h4>Using Media Controls:</h4>
            <ul>
                <li>Use the dedicated media keys (Play/Pause, Volume Up/Down, Mute) for easy media control.</li>
                
            </ul>

        <h3>Troubleshooting</h3>

        <h4>Keyboard Not Responding:</h4>
            <ul>
                <li>Ensure the USB connection is secure.</li>
                <li>Try connecting the keyboard to a different USB port.</li>
                <li>Restart your computer if necessary.</li>
            </ul>
        <h4>Backlighting Not Working:</h4>
        <ul>
            <li>Check if the backlight is disabled or set to a minimal brightness level.</li>
            <li>Verify that the configuration software is properly installed.</li>
        </ul>

        <h4>Key Not Registering:</h4>
        <ul>
            <li>Confirm that no physical obstructions are affecting the key.</li>
            <li>Test the key in different applications to determine if the issue is software-related.</li>
        </ul>

        <h3>Maintenance and Care</h3>
        <h4>Cleaning:</h4>
        <ul>
            <li>Disconnect the keyboard from the computer.</li>
            <li>Use a soft, dry cloth to clean the surface.</li>\
            <li>For deeper cleaning, carefully remove keycaps and use compressed air to remove debris.</li>
        </ul>

        <h4>Storage</h4>
        <ul>
            <li>Store the keyboard in a cool, dry place.</li>
            <li>Avoid exposure to liquids or extreme temperatures.</li>
        </ul>
        <h2>Warranty and Support</h2>
        <ul>
            <li><b>Warranty Period: </b>2 years from the date of purchase.</li>
            <li><b>Customer Support: </b>For assistance, contact customer support via the manufacturer’s website or call the support hotline at 1-800-555-1234.</li>
        </ul>

        <h2><b>Manfacturers Website: </b> <a href="www.keyboardcompany.com">www.keybordcompany.com</a> </h2>
        <h3>Customer Support Email: support@keyboardcompany.com</h3>

        <h3>Support Hotline: 1-800-555-1234</h3>

        <h3>“Thank you for choosing the KB-X1000. We hope you enjoy your new keyboard! Type Safe!”
</h3>
        </div>
        </div>


        
    );
}
Product.propTypes = {
    image: PropTypes.string,
    model: PropTypes.string,
    switchType:PropTypes.string,
    layout:PropTypes.string,
    backlight:PropTypes.string,
    connectivity:PropTypes.string,
    dimension:PropTypes.string,
    weight:PropTypes.string,
    cableLength:PropTypes.string,
    additional:PropTypes.string,
}
Product.defaultProps = {
    image: "https://media.wired.com/photos/65b0438c22aa647640de5c75/master/pass/Mechanical-Keyboard-Guide-Gear-GettyImages-1313504623.jpg",
    switchType:"Cherry MX Red (Mechanical)",
    layout:"Full-size (104 keys)",
    backlight:"RGB with customizable colors",
    connectivity:"Wired (USB 2.0)",
    dimension:"440 mm x 135 mm x 35 mm",
    weight:"1.2 kg",
    cableLength:"1.8 meters",
    additional:"Anti-ghosting, N-key rollover, dedicated media controls",
}