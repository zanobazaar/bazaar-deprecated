package wallet

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type BalanceTx struct {
	Id      int    `json:"id"`
	Jsonrpc string `json:"jsonrpc"`
	Result  struct {
		Balance         uint64 `json:"balance"`
		UnlockedBalance uint64 `json:"unlocked_balance"`
	} `json:"result"`
}

func BalanceFetch(walletUrl string) (uint64, uint64) {
	jsonBody := fmt.Sprintln(`{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "getbalance"
}`)

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
	data := BalanceTx{}

	_ = json.Unmarshal([]byte(body), &data)

	fmt.Println(data.Result.Balance)

	return data.Result.Balance, data.Result.UnlockedBalance
}

func FetchBalance(walletUrl string) (uint64, uint64) {

	balance, unlockedBalance := BalanceFetch(walletUrl)
	return balance, unlockedBalance
}
