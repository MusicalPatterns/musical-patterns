import Jasmine from 'jasmine'
import './support/mockDom'

const jasmine = new Jasmine()
jasmine.loadConfigFile('test/jasmine.json')
jasmine.execute()
