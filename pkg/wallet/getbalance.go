package wallet

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type Tx struct {
	Id      string `json:"id"`
	Jsonrpc string `json:"jsonrpc"`
	Result  struct {
		TxHash        string `json:"tx_hash"`
		TxUnsignedHex string `json:"tx_unsigned_hex"`
	} `json:"result"`
}

func DonationTx(zanoAmount uint64, donateAddress string, walletUrl string) string {
	jsonBody := fmt.Sprintf(`{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "transfer",
	"params": {
		"destinations": [
      {
        "address": "%s",
        "amount": %v,
        "asset_id": ""
      }
    ],
		"fee": 10000000000,
		"mixin": 10,
		"payment_id": "",
		"comment": ""
	}
}
`, donateAddress, zanoAmount)

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
	data := Tx{}

	_ = json.Unmarshal([]byte(body), &data)

	return data.Result.TxHash
}

func SendDonation(amount uint64, donateAddress string, walletUrl string) string {

	zanoAmount := amount + 000000000000 // TODO - fix this so it sends correct amount

	txid := DonationTx(zanoAmount, donateAddress, walletUrl)
	return txid
}
