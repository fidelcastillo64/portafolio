

export default{
    profile: {
        name: 'Castillo Galván Ian Kevin',
        image: "profile.jpg",
        icon: 'fa-solid fa-user',
    onclick: () => {
            console.log('Profile clicked');
        }
    },
    items: [
        {
            id: 0,
            icon: 'fa-house',
            name: 'Inicio',
            action: () => {
                console.log('Home clicked');
            }

        },
        {
            id: 1,
            icon: 'fa-info',
            name: 'Sobre_mi',
            action: () => {
                console.log('About clicked');
            }

        },
        {
            id: 2,
            icon: 'fa-folder',
            name: 'Proyectos',
            action: (collapsedSubmenu) => {
                // cambia el estado del submenu
                // collapsedSubmenu es una variable reactiva que se usa para mostrar u ocultar el submenu
                // si esta colapsado, lo expandemos y viceversa
                collapsedSubmenu = !collapsedSubmenu;
                return collapsedSubmenu;
            },
            // subitem dividido en cientifico de datos y desarrollo web
            submenu: [
                {
                    id: 0,
                    name: 'Cientifico',
                    icon: 'fa-chart-line',
                    action: () => {
                        console.log('Data Scientist clicked');
                    }
                },
                {
                    id: 1,
                    name: 'Desarrollador',
                    icon: 'fa-laptop-code',
                    action: () => {
                        console.log('Web Developer clicked');
                    }
                }
            ]
        },
        {
            id: 3,
            icon: 'fa-graduation-cap',
            name: 'Educacion',
            action: ()=>{
                console.log('Education clicked');
            }
        }
    ]
}