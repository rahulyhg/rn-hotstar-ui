import React, { Component } from 'react';
import { View, Image, StyleSheet,Text} from 'react-native';
import GridView from 'react-native-super-grid';

import PropTypes from 'prop-types';

export default class MyComp extends Component {
    
    static propTypes = {
        images:PropTypes.any.isRequired,
        overlay:PropTypes.array.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const {images,overlay,cardStyles} = this.props;
        return (
            <GridView
                itemDimension={130}
                items={overlay}
                style={styles.gridView}
                renderItem={item => (
                    <View style={[styles.itemContainer]}>
                        <Image
                            style={styles.image}
                            source={images} />

                        <View style={{ borderRadius: 4, height: '100%', width: '100%', backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', top: 0, left: 0 }}>
                        </View>
                        <Text style={styles.itemName}>{item.name}</Text>


                    </View>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        paddingVertical: 25,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        // borderRadius: 4,
        // padding: 10,
        height: 120,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        position: 'absolute',
        alignSelf: 'center',
        top: '45%',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 4,
    },
})