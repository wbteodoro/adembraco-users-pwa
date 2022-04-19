import { ServiceProvider } from './services'

type AppProviderProps = {
  children: React.ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => (
  <ServiceProvider>{children}</ServiceProvider>
)

export default AppProvider
