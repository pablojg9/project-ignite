import { PencilLine } from "@phosphor-icons/react"
import styles from "./Siderbar.module.css";

export const Siderbar = () => {
    return (
        <aside className={styles.siderbar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=30&w=450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/48697810?v=4"/>
                
                <strong>Pablo Junior</strong>
                <span>Web Developer</span>
            </div>
            
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}