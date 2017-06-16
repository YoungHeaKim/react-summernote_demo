import React from 'react';

import Trumbowyg from 'react-trumbowyg';
// ADD THIS LINE. ADJUST THE BEGINNING OF THE PATH AS NEEDED FOR YOUR PROJECT
import '../../../node_modules/trumbowyg/dist/plugins/table/trumbowyg.table';

 class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                    <Trumbowyg id='react-trumbowyg'
                        buttons={
                            [
                                ['viewHTML'],
                                ['formatting'],
                                'btnGrp-semantic',
                                ['link'],
                                ['insertImage'],
                                'btnGrp-justify',
                                'btnGrp-lists',
                                ['table'], // I ADDED THIS FOR THE TABLE PLUGIN BUTTON
                                ['fullscreen']
                            ]
                        }
                        data={this.props.someData}
                        placeholder='Type your text!'
                        onChange={this.props.someCallback}
                        ref="trumbowyg"
                    />
            </div>
        );
    }
}

export default MyComponent;
