export default interface IRoute {
    title: string
    path: string
    exact?: boolean
    element: JSX.Element
}