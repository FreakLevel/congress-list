import * as API from './api'

const API_KEY = 'cD8frbnlbO4RK2eUB005NOsRwyhpWS7eI8fT5LGN'

const HEADERS = { 'X-API-Key': API_KEY }

const URL_BASE = 'https://api.propublica.org/congress/v1/'

const MEMBERS_PATH = (congress, chamber) => `${congress}/${chamber}/members.json`

const MEMBER_DETAIL_PATH = (memberId) => `members/${memberId}.json`

export const getAll = (congressInfo) => API.get(URL_BASE + MEMBERS_PATH(congressInfo.congress, congressInfo.chamber), HEADERS)