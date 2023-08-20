import React from 'react'
import { useSelector } from 'react-redux'

/**
 * Composant UserName.
 *
 * Ce composant affiche le nom de l'utilisateur selon le type d'affichage choisi.
 * Il peut montrer soit le prénom, soit le nom, soit les deux de l'utilisateur.
 *
 * @component
 * @param {Object} props - L'objet des propriétés.
 * @param {('first'|'last'|'full')} props.display - Détermine comment le nom de l'utilisateur doit être affiché.
 * Par défaut, c'est 'full'.
 *
 * @example
 * return <UserName display="first" />
 *
 * @returns {React.ReactNode}
 */
const UserName = ({ display = 'full', className }) => {
  const user = useSelector((state) => state.user.user)

  const nameDisplay = {
    first: user?.firstName || 'Loading',
    last: user?.lastName || '',
    full: `${user?.firstName || 'Loading'} ${user?.lastName || ''}`,
  }

  return <span className={className}>{nameDisplay[display]}</span>
}

export default UserName
