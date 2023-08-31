package market

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type TxUpdateAlias struct {
	Id      int    `json:"id"`
	Jsonrpc string `json:"jsonrpc"`
	Result  struct {
		TxBlobSize int    `json:"tx_blob_size"`
		TxHash     string `json:"tx_hash"`
	} `json:"result"`
}

func UpdateAliasTx(existingTxId string, alias string, walletUrl string, amount string, contactDetails string, comments string, conditions string, paymentType string) string {
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
				"cat": "",
				"cnt": "%s",
				"com": "%s",
				"do": "%s",
				"et": 5,
				"fee": 10000000000,
				"lci": "",
				"lco": "",
				"ot": 3,
				"pt": "%s",
				"t": "%s",
				"url": ""
			}
		}
	}`, existingTxId, amount, contactDetails, comments, conditions, paymentType, alias)

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
	data := TxUpdateAlias{}

	_ = json.Unmarshal([]byte(body), &data)

	return data.Result.TxHash
}

func UpdateAlias(existingTxId string, alias string, walletUrl string, amount string, contactDetails string, comments string, conditions string, paymentType string) string {

	txId := UpdateAliasTx(existingTxId, alias, walletUrl, amount, contactDetails, comments, conditions, paymentType)
	return txId
}
