import CandlestickComponentHTML from './candlestick/candlestick.component.html';
import { CandlestickComponent } from './candlestick/candlestick.component.js';
import OrderbookComponentHTML from './orderbook/orderbook.component.html';
import { OrderbookComponent } from './orderbook/orderbook.component.js';

export class RealtimeComponent extends HTMLElement {

    constructor() {

        super();

        document.getElementsByClassName('candlestick')[0].innerHTML = CandlestickComponentHTML
        customElements.get('candlestick-component') || customElements.define('candlestick-component', CandlestickComponent);

        document.getElementsByClassName('orderbook')[0].innerHTML = OrderbookComponentHTML
        customElements.get('orderbook-component') || customElements.define('orderbook-component', OrderbookComponent);

    }

}