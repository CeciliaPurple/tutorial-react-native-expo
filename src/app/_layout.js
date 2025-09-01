import { Tabs } from "expo-router"
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#a73bffff',
            tabBarInactiveTintColor: '#ffffffff',
            tabBarStyle: { backgroundColor: '#000'}
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
                    //tabBarShowLabel: false,
                    tabBarLabelStyle: { fontSize: 8, fontWeight: 'bold' },
                    //tabBarBadge: 3
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Sobre',
                    tabBarIcon: ({ color }) => <FontAwesome5 name="user-tie" size={24} color={color} />,
                    //tabBarShowLabel: false,
                    tabBarLabelStyle: { fontSize: 8, fontWeight: 'bold' }
                }}
            />
            <Tabs.Screen
                name="contact"
                options={{
                    title: 'Contato',
                    tabBarIcon: ({ color }) => <AntDesign name="contacts" size={24} color={color} />,
                    //tabBarShowLabel: false,
                    tabBarLabelStyle: { fontSize: 8, fontWeight: 'bold' }
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} />,
                    //tabBarShowLabel: false,
                    tabBarLabelStyle: { fontSize: 8, fontWeight: 'bold' }
                }}
            />
        </Tabs>
    )
}