{
  "type": "object",
  "properties": {
    "questions": {
      "type": "object",
      "patternProperties": {
        "^[0-9]+$": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "options": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "next_question_id": {
                    "type": "integer"
                  },
                  "text": {
                    "type": "string"
                  }
                },
                "required": [
                  "next_question_id",
                  "text"
                ]
              }
            },
            "text": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "options",
            "text"
          ]
        }
      }
    }
  },
  "required": [
    "questions"
  ]
}

