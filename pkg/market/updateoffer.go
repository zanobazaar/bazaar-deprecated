package market

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type TxUpdateOffer struct {
	Id      int    `json:"id"`
	Jsonrpc string `json:"jsonrpc"`
	Result  struct {
		TxBlobSize int    `json:"tx_blob_size"`
		TxHash     string `json:"tx_hash"`
	} `json:"result"`
}

func OfferUpdateTx(txIdToUpdate string, walletUrl string, title string, amount string, category string, comments string, conditions string, expire int, locationCity string, paymentType string) string {
	jsonBody := fmt.Sprintf(`{
	"jsonrpc": "2.0",
	"id": "0",
	"method": "marketplace_push_update_offer",
	"params": {
		"tx_id": "%s",
		"no": 0,
		"od": {
			"ap": "%s",
			"at": "",
			"b":"",
			"cat": "%s",
			"cnt": "%s",
			"com": "%s",
			"do": "",
			"et": %d,
			"fee": 10000000000,
			"lci": "%s",
			"lco": "",
			"ot": 3,
			"pt": "%s",
			"t": "%s",
			"url": ""
		}
	}
}`, txIdToUpdate, amount, category, conditions, comments, expire, locationCity, paymentType, title)

	request, err := http.NewRequest("POST", walletUrl, bytes.NewBuffer([]byte(jsonBody)))
	if err != nil {
		fmt.Println("error") // return meaningful statement
	}
	request.Header.Set("Content-Type", "application/json; charset=UTF-8")

	client := &http.Client{}
	res, err := client.Do(request)
	if err != nil {
		fmt.Println("error") // return meaningful statement
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			fmt.Println("error")
		}
	}(res.Body)

	body, _ := io.ReadAll(res.Body)
	data := TxUpdateOffer{}

	_ = json.Unmarshal([]byte(body), &data)

	return data.Result.TxHash
}

func OfferUpdate(txIdToUpdate string, walletUrl string, title string, amount string, category string, comments string, conditions string, expire int, locationCity string, paymentType string) string {

	txId := OfferUpdateTx(txIdToUpdate, walletUrl, title, amount, category, comments, conditions, expire, locationCity, paymentType)
	return txId
}
