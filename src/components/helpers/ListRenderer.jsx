import React from 'react'
import PropTypes from 'prop-types'

/**
 * Un composant qui prend une liste de données (chaînes ou objets) et un composant à rendre,
 * puis rend ce composant pour chaque élément de la liste.
 *
 * @component
 * @param {(Object[]|string[])} data - La liste de données à rendre. Peut être un tableau de chaînes ou d'objets.
 * @param {React.ElementType} Component - Le composant à utiliser pour rendre chaque élément de la liste.
 * @param {string} [propName=null] - Le nom de la prop à utiliser pour passer les données au composant.
 *                                  Si non fourni, les données seront passées directement comme props.
 *
 * @returns {React.ReactNode} Une liste du composant spécifié rendu pour chaque élément de la liste de données.
 */

const ListRenderer = ({ data, Component, propName = null }) => (
  <>
    {data.map((item, index) => (
      <Component
        key={item.id || item._id || index} // Ajoutez l'index comme clé de repli
        {...(propName ? { [propName]: item } : item)}
      />
    ))}
  </>
)

ListRenderer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ).isRequired,
  Component: PropTypes.elementType.isRequired,
  propName: PropTypes.string,
}

export default ListRenderer
