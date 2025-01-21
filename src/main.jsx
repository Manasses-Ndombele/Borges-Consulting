import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import FinanceServices from './routes/FinanceServices'
import MarketingServices from './routes/MarketingServices'
import ProcessesServices from './routes/ProcessesServices'
import PeopleServices from './routes/PeopleServices'
import App from './routes/App'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <App /> } />
            <Route path='/services/finance' element={ <FinanceServices /> } />
            <Route path='/services/marketing' element={ <MarketingServices /> } />
            <Route path='/services/processes' element={ <ProcessesServices /> } />
            <Route path='/services/people' element={ <PeopleServices /> } />
        </Routes>
    </BrowserRouter>
)
