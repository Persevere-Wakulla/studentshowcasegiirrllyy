import fs from 'node:fs/promises'
// Reading the database and sending it back  *note: placed "export" in order to be able to export the function to the server

export async function getDb(file){
    const db = fs.readFile(file, 'utf-8')
    return db
}