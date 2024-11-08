import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../../Components/Header/BackHeader'
import { moderateScale } from '../../../Constants/PixelRatio'
import { FONTS } from '../../../Constants/Fonts'

const Subscription = () => {
    const colors = useTheme()
    const planArr = [
        {
            plan: 'Premium',
            point1: 'Chats anyone',
            point2: 'Location visibility',
            point3: 'Currently active people',
            point4: 'Global connections',
            weekprc: '200/-',
            monthprc: '600/-',
            yearprc: '999/-',
        },
        {
            type: 'gold',
            plan: 'Premium Gold',
            point1: 'Chats anyone',
            point2: 'Location visibility',
            point3: 'Currently active people',
            point4: 'Global connections',
            point5: 'List of admires',
            point6: 'People nearby',
            point7: 'Chat with active users',
            weekprc: '200/-',
            monthprc: '600/-',
            yearprc: '999/-',
        },
    ]
    return (
        <Container>
            <BackHeader title={'Subscription Plans'} />
            <Text
                style={styles.text_heading}>
                Discover More People And Get More Swipes!!
            </Text>
            <View
                style={styles.card_box}>
                <Text
                    style={styles.premium_text}>
                    Premium
                </Text>
                <View
                    style={styles.plan_option}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            type='Entypo'
                            name='dot-single'
                        />
                        <Text
                            style={styles.opiton_text}>
                            Chats With anyone
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            type='Entypo'
                            name='dot-single'
                        />
                        <Text
                            style={styles.opiton_text}>
                            Location visibility
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            type='Entypo'
                            name='dot-single'
                        />
                        <Text
                            style={styles.opiton_text}>
                            0nline People
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            type='Entypo'
                            name='dot-single'
                        />
                        <Text
                            style={styles.opiton_text}>
                            Unlimited likes
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            type='Entypo'
                            name='dot-single'
                        />
                        <Text
                            style={styles.opiton_text}>
                            Global connections
                        </Text>
                    </View>
                </View>
                <View
                    style={styles.price_view_box}>
                    <View
                        style={{
                            ...styles.price_box,
                            backgroundColor: colors.primaryThemeColor
                        }}>
                        <Text
                            style={{
                                ...styles.opiton_text,
                                color: colors.secondaryThemeColor
                            }}>
                            Weekly
                        </Text>
                        <Text
                            style={{
                                ...styles.opiton_text,
                                color: colors.secondaryThemeColor
                            }}>
                            200/-
                        </Text>
                    </View>
                    <View
                        style={{
                            ...styles.price_box,
                            backgroundColor: colors.primaryThemeColor
                        }}>
                        <Text
                            style={{
                                ...styles.opiton_text,
                                color: colors.secondaryThemeColor
                            }}>
                            Monthly
                        </Text>
                        <Text
                            style={{
                                ...styles.price_view_box,
                                color: colors.secondaryThemeColor
                            }}>
                            400/-
                        </Text>
                    </View>
                    <View
                        style={{
                            ...styles.price_box,
                            backgroundColor: colors.primaryThemeColor
                        }}>
                        <Text
                            style={{
                                ...styles.opiton_text,
                                color: colors.secondaryThemeColor
                            }}>
                            Yearly
                        </Text>
                        <Text
                            style={{
                                ...styles.opiton_text,
                                color: colors.secondaryThemeColor
                            }}>
                            600/-
                        </Text>
                    </View>
                </View>
            </View>

            <View
                style={styles.card_box}>
                <Text
                    style={styles.premium_text}>
                    Premium Gold
                </Text>
                <View
                    style={styles.plan_option}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            type='Entypo'
                            name='dot-single'
                        />
                        <Text
                            style={styles.opiton_text}>
                            Chats With anyone
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            type='Entypo'
                            name='dot-single'
                        />
                        <Text
                            style={styles.opiton_text}>
                            Connect With People Nearby
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            type='Entypo'
                            name='dot-single'
                        />
                        <Text
                            style={styles.opiton_text}>
                            Location visibility
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            type='Entypo'
                            name='dot-single'
                        />
                        <Text
                            style={styles.opiton_text}>
                            0nline People
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            type='Entypo'
                            name='dot-single'
                        />
                        <Text
                            style={styles.opiton_text}>
                            Unlimited likes
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            type='Entypo'
                            name='dot-single'
                        />
                        <Text
                            style={styles.opiton_text}>
                            Global connections
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <Icon
                            type='Entypo'
                            name='dot-single'
                        />
                        <Text
                            style={styles.opiton_text}>
                            24/7 Support
                        </Text>
                    </View>
                </View>
                <View
                    style={styles.price_view_box}>
                    <View
                        style={{
                            ...styles.price_box,
                            backgroundColor: colors.primaryThemeColor
                        }}>
                        <Text
                            style={{
                                ...styles.opiton_text,
                                color: colors.secondaryThemeColor
                            }}>
                            Weekly
                        </Text>
                        <Text
                            style={{
                                ...styles.opiton_text,
                                color: colors.secondaryThemeColor
                            }}>
                            200/-
                        </Text>
                    </View>
                    <View
                        style={{
                            ...styles.price_box,
                            backgroundColor: colors.primaryThemeColor
                        }}>
                        <Text
                            style={{
                                ...styles.opiton_text,
                                color: colors.secondaryThemeColor
                            }}>
                            Monthly
                        </Text>
                        <Text
                            style={{
                                ...styles.price_view_box,
                                color: colors.secondaryThemeColor
                            }}>
                            400/-
                        </Text>
                    </View>
                    <View
                        style={{
                            ...styles.price_box,
                            backgroundColor: colors.primaryThemeColor
                        }}>
                        <Text
                            style={{
                                ...styles.opiton_text,
                                color: colors.secondaryThemeColor
                            }}>
                            Yearly
                        </Text>
                        <Text
                            style={{
                                ...styles.opiton_text,
                                color: colors.secondaryThemeColor
                            }}>
                            600/-
                        </Text>
                    </View>
                </View>
            </View>

        </Container>
    )
}

export default Subscription

const styles = StyleSheet.create({
    text_heading: {
        marginHorizontal: moderateScale(15),
        fontFamily: FONTS.regular,
        fontSize: moderateScale(16),
    },
    card_box: {
        width: '90%',
        backgroundColor: '#FFDBE6',
        marginHorizontal: moderateScale(20),
        borderRadius: moderateScale(10),
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(10),
        marginVertical:moderateScale(20)
    },
    premium_text: {
        fontFamily: FONTS.bold,
        fontSize: moderateScale(15)
    },
    plan_option: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
    },
    opiton_text: {
        fontFamily: FONTS.regular,
        fontSize: moderateScale(12)
    },
    price_box: {
        width: moderateScale(85),
        height: moderateScale(50),
        borderRadius: moderateScale(10),
        marginTop: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
    },
    price_view_box: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})