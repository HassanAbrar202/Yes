const { __ } = wp.i18n; // Import __() from wp.i18n
const { Component } = wp.element;
const { serverSideRender: ServerSideRender } = wp;
const { InspectorControls, PanelColorSettings } = wp.editor;
const { RangeControl, CheckboxControl, PanelBody, SelectControl, TextControl, TextareaControl } = wp.components;

import { InspectorContainer, ContainerEdit } from '../commonComponents/container/container';

/**
 * The edit function describes the structure of your block in the context of the editor.
 * This represents what the editor will render when the block is used.
 *
 * The "edit" property must be a valid function.
 * @param {Object} props - attributes
 * @returns {Node} rendered component
 */
export default class Edit extends Component {

    render() {
        const {
            className,
            attributes,
            setAttributes,
        } = this.props;

        return (
            <div className={ className }>
                <InspectorControls
                    setAttributes={ setAttributes }
                    { ...attributes }
                >
                    <PanelBody
                        title={ __( 'General', 'myticket-events'  ) }
                        initialOpen={ false }
                    >

                        <RangeControl
                            label={ __( 'Records per page', 'myticket-events'  ) }
                            value={ attributes.per_page }
                            onChange={ ( value ) => setAttributes( { per_page: value } ) }
                            min={ 1 }
                            max={ 200 }
                            help={ __( 'Specify the maximum number of events to query from database.', 'myticket-events'  ) }
                        />
                        
                        <TextControl
                            label={ __( 'Category', 'myticket-events' ) }
                            value={ attributes.category }
                            onChange={ ( category ) => setAttributes( { category } ) }
                            help={ __( 'Restrict all records to certain category. To view categories go to Products > Categories section.', 'myticket-events' ) }
                        />

                        <PanelColorSettings
                            title={ __( 'Main Color', 'myticket-events'  ) }
                            initialOpen={ true }
                            colorSettings={ [
                                    {
                                        value: attributes.mainColor,
                                        onChange: ( value ) => {
                                            return setAttributes( { mainColor: value } );
                                        },
                                        label: __( 'Selected', 'myticket-events'  ),
                                    },
                                ] }
                        />

                        <SelectControl
                            label={ __( 'Query relation', 'myticket-events'  ) }
                            checked={ attributes.relation }
                            options={[
                                { label:  __( 'AND', 'myticket-events' ) , value: '' },
                                { label:  __( 'OR', 'myticket-events' ) , value: 'popularity' },
                            ]}
                            help={ __('This rule tells database how to filter results. If user selects two categories Golf and Swimming AND will show only those events that are in Golf and Swimming simultaneously. If user selects Golf and Swimming categories OR will picks up all events within Golf category and unites them with all events from Swimming category. The more checkboxes user ticks with OR relation the more results will be shown and vice versa if AND is selected.', 'myticket-events' ) }
                            onChange={ (relation) => setAttributes( { relation } ) }
                        />

                    </PanelBody>
                    <PanelBody
                        title={ __( 'Filter', 'myticket-events' ) }
                        initialOpen={ false }
                    >

                        <CheckboxControl
                            label={ __( 'Show Filter', 'myticket-events' ) }
                            checked={ attributes.checkFilter}
                            onChange={ (checkFilter) => setAttributes( { checkFilter } ) }
                        />

                        { attributes.checkFilter && ( <TextareaControl
                            label={ __( 'Filter locations', 'myticket-events' ) }
                            value={ attributes.filterLocations }
                            onChange={ ( filterLocations ) => setAttributes( { filterLocations } ) }
                            help={ __( 'Override default location list. Separate locations by ",". Ex.: Arena Berlin, Belgrade Stadium.. If empty all locations are queried. To specify event location go to Products > Edit product > Event Title', 'myticket-events' ) }
                        /> ) }

                    </PanelBody>
                    
                    <InspectorContainer
                        setAttributes={ setAttributes }
                        { ...attributes }
                        withPadding
                        withWidth100
                        withBackground
                    />
                </InspectorControls>

                <ServerSideRender
                    block="myticket-events/listing-04"
                    attributes={ {
                        align: attributes.align,
                        eventID: 0,
                        serverSide: true,
                    } }
                />
            </div>
        );
    }
}
