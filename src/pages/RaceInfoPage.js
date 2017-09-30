import React, {Component} from 'react';
import {
    View, Text, Button, Alert, DatePickIOS,
    Image, StyleSheet, ActivityIndicator,
    TouchableOpacity, ScrollView,Dimensions,
    ListView,Animated,Easing
}
    from 'react-native';
import FocusImage from './../../source/FocusImage';

const onButtonPress=()=>{

};

const texts=['2017WSOP欧洲站来袭，保底100W欧元...',
    'qqwqw2017WSOP欧洲站来袭，保底100W欧元qwqq...',
    'SOP欧洲站来袭，保底100W欧元sdsdsdsdsds...',
    'asdhsdnskldhsydsldjsdyuaso'];
var i=1;
var touch=true;
var deviceWidth = Dimensions.get('window').width;


export default class RaceInfoPage extends Component {
    state={
      text:texts[0],
        opa:1
    };
    constructor () {
        super()
        this.animatedValue = new Animated.Value(0)
    }
    componentDidMount() {
        // Animated.timing(texts, {
        //     toValue: 1, // 目标值
        //     duration: 2500, // 动画时间
        //     easing: Easing.linear // 缓动函数
        // }).start();
        if(touch){
            this.showText();

        }
        this.animate()

    };
    animate () {
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.animate())
    };

    showText =() => {
        setInterval(() => {
            if(i === texts.length){
                i=0;
            }
            i++;
            this.setState({
                text:texts[i-1]
            });
        },4000);
    };


    render() {
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 5, 0]
        })
        return (
            <ScrollView>
                <View style={styles.scrollImg}>
                    <FocusImage />
                    {/*<ViewPager*/}
                        {/*dataSource={this.state.headerDataSource}*/}
                        {/*style={styles.listHeader}*/}
                        {/*renderPage={this._renderPage}*/}
                        {/*isLoop={true}*/}
                        {/*autoPlay={true} />*/}
                </View>
                <View
                    style={{height:100,flexDirection:'row',flexWrap:'nowrap',justifyContent:'space-around',alignItems:'center'}}>
                    <View style={styles.ticket}>
                        <Image source={require('../../source/images/icon_spot.png')}/>
                        <Text>票务</Text>
                    </View>
                    <View style={styles.ticket}>
                        <Image source={require('../../source/images/icon_spot.png')}/>
                        <Text>商城</Text>
                    </View>
                    <View style={styles.ticket}>
                        <Image source={require('../../source/images/icon_spot.png')}/>
                        <Text>资讯</Text>
                    </View>
                    <View style={styles.ticket}>
                        <Image source={require('../../source/images/icon_spot.png')}/>
                        <Text>排行</Text>
                    </View>
                </View>
                <View style={styles.pukes}>
                    <View style={styles.puke}>
                        <Text style={styles.pukeText}>扑客头条</Text>
                        <Animated.View style={{opacity}}>
                            <Text style={[styles.pukeText,{marginLeft:10}]}
                            onPress={}>{this.state.text}</Text>
                        </Animated.View>
                    </View>
                </View>
                <View>
                    <View style={[styles.races]}>
                        <ActivityIndicator/>
                        <Text style={styles.raceText}>火热开赛</Text>
                    </View>
                    <View style={styles.racesTwo}>
                        <Image source={require('../../source/images/icon_spot.png')}/>
                        <View style={styles.racesTwoRight}>
                            <Text style={[styles.raceText,{height:70}]}>如果你无法简洁的表达你...</Text>
                            <Text style={[styles.raceText,{marginTop:10}]}>如果你无法简洁的表达你...</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:8,backgroundColor:'#F7F7F7',marginTop:10,marginBottom:20}}></View>
                <View>
                    <View style={[styles.more,{marginLeft:20}]}>
                        <ActivityIndicator/>
                        <Text style={styles.raceText}>即将到来</Text>
                        <TouchableOpacity style={{marginLeft:150}}
                                          onPress={onButtonPress}>
                            <Text style={[styles.raceText]}>更多 ></Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.moreTwos}>
                        <View style={styles.moreTwo}>
                            <Image source={require('../../source/images/icon_spot.png')}/>
                            <Text style={[styles.raceText,{marginTop:10}]}>如果你无法简洁的表达你...</Text>
                        </View>
                        <View style={styles.moreTwo}>
                            <Image source={require('../../source/images/icon_spot.png')}/>
                            <Text style={[styles.raceText,{marginTop:10}]}>如果你无法简洁的表达你...</Text>
                        </View>
                        <View style={styles.moreTwo}>
                            <Image source={require('../../source/images/icon_spot.png')}/>
                            <Text style={[styles.raceText,{marginTop:10}]}>如果你无法简洁的表达你...</Text>
                        </View>
                        <View style={styles.moreTwo}>
                            <Image source={require('../../source/images/icon_spot.png')}/>
                            <Text style={[styles.raceText,{marginTop:10}]}>如果你无法简洁的表达你...</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <View style={[styles.more,{marginLeft:20,marginTop:20}]}>
                        <ActivityIndicator/>
                        <Text style={styles.raceText}>热门资讯</Text>
                        <TouchableOpacity style={{marginLeft:150}}
                                          onPress={onButtonPress}>
                            <Text style={[styles.raceText]}>更多 ></Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.information}>
                        <View style={styles.informationTwo}>
                            <Text style={[styles.raceText,{marginTop:10}]}>如果你无法简洁的表达你...</Text>
                            <Image style={styles.informationImg} source={require('../../source/images/icon_spot.png')}/>
                        </View>
                        <View style={styles.informationTwo}>
                            <Text style={[styles.raceText,{marginTop:10}]}>如果你无法简洁的表达你...</Text>
                            <Image style={styles.informationImg} source={require('../../source/images/icon_spot.png')}/>
                        </View>
                    </View>
                </View>
                <View
                    style={{height:0.5,backgroundColor:'#000000',marginTop:10,marginBottom:20,width:359,marginLeft:5}}></View>

                <View style={{marginTop:5,marginLeft:20,marginRight:20}}>
                    <Text numberOfLines={3} >如果你无法简洁的表达你的想法，那只说明你还不够了解它。{'\n'}-- 阿尔伯特·爱因斯坦</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollImg:{
        flex: 1, height: 200
    },
    ticket: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    pukes: {
        height: 58,
        backgroundColor: '#F7F7F7',
        justifyContent: 'center'
    },
    puke: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        marginRight: 50
    },
    pukeText: {
        fontSize: 12,
        color: '#363636',

    },
    scrollText:{

    },
    races: {
        height: 50,
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center'
    },
    raceText: {
        fontSize: 14,
        color: '#000000',
        marginLeft: 30
    },
    racesTwo: {
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center'
    },
    racesTwoRight: {
        flexDirection: 'column',
        marginLeft: 20,
        alignItems: 'center'
    },
    more: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    moreTwos: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap'
    },
    moreTwo: {
        width: 89,
        flexDirection: 'column',
        alignItems: 'center'
    },
    information: {
        flexDirection: 'column',

    },
    informationTwo: {
        height: 65,
        flexDirection: 'row',
        alignItems: 'center'
    },
    informationImg: {
        marginLeft: 100,

    },
    page: {
        width: deviceWidth,
    },
    headerItem: {
        flex: 1,
        height: 200,
        flexDirection: 'row',
    },
    headerTitleContainer: {
        flex: 1,
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        marginBottom: 10,
    }
});