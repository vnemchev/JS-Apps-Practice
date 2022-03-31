import * as carsService from '../api/cars.js';
import { searchByYearTemplate } from '../templates/byyear.js';

export function searchByYearView(ctx) {
    ctx.render(searchByYearTemplate(onSearch, []));

    async function onSearch(e) {
        const inputText = e.target.parentNode.querySelector('input').value;

        if (inputText == '') {
            return alert('Empty input.');
        }
        const matches = await carsService.search(inputText);

        ctx.render(searchByYearTemplate(onSearch, matches));
    }
}
