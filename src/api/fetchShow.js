import axios from "axios"

// fetchShow.js
export const fetchShow = () => {
  return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
    )
    .then(res => {
      console.log("res in api/fetchShow", res)
      return res
    }) // or res.data, however you want to set that up
    .catch(err => {
      console.log("error fetching", err)
      return err
    })
}
