import {Component, Input} from '@angular/core';
import {Game} from '../../model/game';
import {environment} from '../../../environments/environment';
import {imageSets} from '../image-set-loader/image-set-loader.component';

@Component({
	selector: 'app-help-component',
	templateUrl: './help-component.component.html',
	styleUrls: ['./help-component.component.scss']
})
export class HelpComponent {

	@Input() public game: Game;
	public version = environment.version;
	public sets = imageSets;

	constructor() {
	}
}
