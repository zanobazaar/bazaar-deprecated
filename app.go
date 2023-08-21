package main

import (
	"changeme/pkg/wallet"
	"context"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

type Addresses struct {
	Address string `json:"address"`
	Alias   string `json:"alias"`
}

// CheckConnection returns a greeting for the given name
func (a *App) CheckConnection(walletUrl string, daemonUrl string) Addresses {
	address, aliasMatch := wallet.CheckZanoServices(walletUrl, daemonUrl)
	return Addresses{Address: address, Alias: aliasMatch}
}
