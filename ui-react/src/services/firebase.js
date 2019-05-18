import * as firebase from 'firebase';
import config from '../config/firebase';


class FirebaseService {
	constructor( limit = 1000 ) {
		this.app = firebase.initializeApp(config);
		this.inside = this.app.database().ref( 'report' ).limitToLast( limit );
		this.outside = this.app.database().ref( 'reportOutside' ).limitToLast( limit );
	}
    
	async getInside() {
		return await this.inside.once( 'value' )
			.then( ( snap ) => {
				const val = snap.val();
				const values = Object.values( val );
				const trace = {
					x: values.map( ( element ) => {
						let date = new Date( element.created_on.time );
						return date;
					} ),
					y: values.map( ( element ) => element.value ),
					name: 'inside'

				};
                
				return {
					data: trace,
					temp: trace.y[ trace.y.length - 1 ]
				};
			} );
	}
    
	async getOutside() {
		return await this.outside.once( 'value' )
			.then( ( snap ) => {
				const val = snap.val();
				const values = Object.values( val );
				const trace = {
					x: values.map( ( element ) => {
						let date = new Date( element.created_on.time );
						return date;
					} ),
					y: values.map( ( element ) => element.value ),
					name: 'outside'

				};
                
				return {
					data: trace,
					temp: trace.y[ trace.y.length - 1 ]
				};
			} );
	}

}

export default FirebaseService;