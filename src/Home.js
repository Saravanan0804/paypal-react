import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            env:'sandbox',
            currency:'USD',
            amount:'15',
            client : {
                sandbox:    'AYQosEdhlIyCKWbFOAKkqAjkhuTWxG_7geP4853qtbKjdv2PE6bzuZNcYdxRs1hifvsAQZVXzt4awmEP',
                production: 'YOUR-PRODUCTION-APP-ID',
            }
        }
    }
    getamount(ev){
        this.setState({amount:ev.target.value});
    }

    jeetfun(err){
        console.log(err);
    }
    parthafun(suc){
        console.log(suc);
    }
    parthafun(canc){
        console.log(canc);
    }

    render() {

        return (
            <div>
                <h1>Welcome</h1>
                <p><input type="text" value={this.state.amount} onChange={this.getamount.bind(this)} /> </p>
            <PaypalExpressBtn env={this.state.env} client={this.state.client} currency={this.state.currency} total={this.state.amount} onError={this.jeetfun} onSuccess={this.parthafun} onCancel={this.prakashfun} />
            </div>
        );
    }
}

export default Home;