import React from 'react'
import Footer from './Footer'
import NavigationBar from './NavigationBar'

export const Layout = ({children}) => {
    return(
        <React.Fragment>
            <div style = {{backgroundColor: "#171716"}}>
                <NavigationBar />
                    <main>
                        {children}
                    </main>
                    <Footer />
            </div>
        </React.Fragment>
    )
}