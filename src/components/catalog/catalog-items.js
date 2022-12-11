export default [
  {
    "type": "CATEGORY",
    "id": "SG3TI46EX737IWVBCBEOCY2J",
    "updated_at": "2022-10-25T07:18:10.638Z",
    "created_at": "2021-06-29T17:44:36.644Z",
    "version": 1666682290638,
    "is_deleted": false,
    "present_at_all_locations": true,
    "category_data": {
      "name": "Health and Wellness",
      "ordinal": 0,
      "is_top_level": true
    }
  },
  {
    "type": "CUSTOM_ATTRIBUTE_DEFINITION",
    "id": "7NL2MTTG2ZTBR53F2W7U6XMH",
    "updated_at": "2021-07-01T06:32:40.808Z",
    "created_at": "2021-07-01T06:32:40.808Z",
    "version": 1625121160808,
    "is_deleted": false,
    "present_at_all_locations": true,
    "custom_attribute_definition_data": {
      "type": "BOOLEAN",
      "name": "Is Alcoholic",
      "description": "Enabling this toggle on an item indicates that it contains alcohol.",
      "source_application": {
        "application_id": "sq0idp-w46nJ_NCNDMSOywaCY0mwA",
        "name": "Square Online Store"
      },
      "allowed_object_types": [
        "ITEM"
      ],
      "seller_visibility": "SELLER_VISIBILITY_HIDDEN",
      "app_visibility": "APP_VISIBILITY_HIDDEN",
      "key": "is_alcoholic"
    }
  },
  {
    "type": "QUICK_AMOUNTS_SETTINGS",
    "id": "AKVNK2FDBOEBDWOA5ZQJUZ32",
    "updated_at": "2021-07-01T06:41:59.941Z",
    "created_at": "2021-07-01T06:41:59.941Z",
    "version": 1625121719941,
    "is_deleted": false,
    "present_at_all_locations": false,
    "present_at_location_ids": [
      "LCAHQ0JFR3SYZ"
    ],
    "quick_amounts_settings_data": {
      "option": "DISABLED",
      "eligible_for_auto_amounts": false
    }
  },
  {
    "type": "ITEM",
    "id": "AUZXHHWNYDGXSP5DC6P4OUQX",
    "updated_at": "2022-10-18T05:00:46.887Z",
    "created_at": "2022-10-18T04:59:53.918Z",
    "version": 1666069246887,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Swedish Massage 60min",
      "description": "Enjoy a Swedish Massage Relaxation Massage Light to Medium pressure $130 60min. Beautiful nice Calm setting with calming sounds of Relaxation. Hot towel provided to ease muscles.Choice of Aromatherapy and infused water or herbal tea",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "YOLJ5SQ6XQ5OKK5K533YWWQD",
          "updated_at": "2022-10-18T05:00:46.887Z",
          "created_at": "2022-10-18T04:59:53.918Z",
          "version": 1666069246887,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "AUZXHHWNYDGXSP5DC6P4OUQX",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 13000,
              "currency": "USD"
            },
            "service_duration": 3600000,
            "price_description": "$130",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Enjoy a Swedish Massage Relaxation Massage Light to Medium pressure $130 60min. Beautiful nice Calm setting with calming sounds of Relaxation. Hot towel provided to ease muscles.Choice of Aromatherapy and infused water or herbal tea</p>",
      "description_plaintext": "Enjoy a Swedish Massage Relaxation Massage Light to Medium pressure $130 60min. Beautiful nice Calm setting with calming sounds of Relaxation. Hot towel provided to ease muscles.Choice of Aromatherapy and infused water or herbal tea"
    }
  },
  {
    "type": "ITEM",
    "id": "F6RQMREKSBWOOGV6VYIC4Q4Z",
    "updated_at": "2022-10-18T06:13:25.788Z",
    "created_at": "2022-10-18T05:07:49.685Z",
    "version": 1666073605788,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Swedish Massage 90min",
      "description": "Enjoy a Swedish Massage Relaxation Massage Light to Medium pressure $160 90min. Beautiful nice Calm setting with calming sounds of Relaxation. Hot towel provided to ease muscles.Choice of Aromatherapy and infused water or herbal tea",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "OF3FQMN4NZ3NNYDMWYZZTYI6",
          "updated_at": "2022-10-18T06:13:25.788Z",
          "created_at": "2022-10-18T05:07:49.685Z",
          "version": 1666073605788,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "F6RQMREKSBWOOGV6VYIC4Q4Z",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 16000,
              "currency": "USD"
            },
            "service_duration": 5400000,
            "price_description": "$160",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Enjoy a Swedish Massage Relaxation Massage Light to Medium pressure $160 90min. Beautiful nice Calm setting with calming sounds of Relaxation. Hot towel provided to ease muscles.Choice of Aromatherapy and infused water or herbal tea</p>",
      "description_plaintext": "Enjoy a Swedish Massage Relaxation Massage Light to Medium pressure $160 90min. Beautiful nice Calm setting with calming sounds of Relaxation. Hot towel provided to ease muscles.Choice of Aromatherapy and infused water or herbal tea"
    }
  },
  {
    "type": "ITEM",
    "id": "QKABMNZ3XG7QTNBCSC2VGF6O",
    "updated_at": "2022-10-18T06:10:56.952Z",
    "created_at": "2022-10-18T05:10:48.869Z",
    "version": 1666073456952,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Deep Tissue 60 min",
      "description": "Enjoy a Deep Tissue Massage Medium to Hard pressure . Beautiful nice Calm setting with calming sounds of Relaxation. Hot towel provided to ease muscles.Choice of Aromatherapy and infused water or herbal tea",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "GO4LRHBMKVX4GFVL7INA4FJV",
          "updated_at": "2022-10-18T06:10:56.952Z",
          "created_at": "2022-10-18T05:10:48.869Z",
          "version": 1666073456952,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "QKABMNZ3XG7QTNBCSC2VGF6O",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 16000,
              "currency": "USD"
            },
            "service_duration": 3600000,
            "price_description": "$160",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Enjoy a Deep Tissue Massage Medium to Hard pressure . Beautiful nice Calm setting with calming sounds of Relaxation. Hot towel provided to ease muscles.Choice of Aromatherapy and infused water or herbal tea</p>",
      "description_plaintext": "Enjoy a Deep Tissue Massage Medium to Hard pressure . Beautiful nice Calm setting with calming sounds of Relaxation. Hot towel provided to ease muscles.Choice of Aromatherapy and infused water or herbal tea"
    }
  },
  {
    "type": "ITEM",
    "id": "4XPKZC7B5KVCMUY545RBGC6Q",
    "updated_at": "2022-10-18T06:11:24.104Z",
    "created_at": "2022-10-18T05:13:14.245Z",
    "version": 1666073484104,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Deep Tissue 90min",
      "description": "Enjoy a Deep Tissue Massage Medium to Hard pressure. Beautiful nice Calm setting with calming sounds of Relaxation. Hot towel provided to ease muscles.Choice of Aromatherapy and infused water or herbal tea",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "HLXJJNIO6MVY25FCEUQ7IFPG",
          "updated_at": "2022-10-18T06:11:24.104Z",
          "created_at": "2022-10-18T05:13:14.245Z",
          "version": 1666073484104,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "4XPKZC7B5KVCMUY545RBGC6Q",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 22500,
              "currency": "USD"
            },
            "service_duration": 5400000,
            "price_description": "$225",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Enjoy a Deep Tissue Massage Medium to Hard pressure. Beautiful nice Calm setting with calming sounds of Relaxation. Hot towel provided to ease muscles.Choice of Aromatherapy and infused water or herbal tea</p>",
      "description_plaintext": "Enjoy a Deep Tissue Massage Medium to Hard pressure. Beautiful nice Calm setting with calming sounds of Relaxation. Hot towel provided to ease muscles.Choice of Aromatherapy and infused water or herbal tea"
    }
  },
  {
    "type": "ITEM",
    "id": "ZVZLVMLSAXFKWHJK52PTEABN",
    "updated_at": "2022-10-18T06:12:26.365Z",
    "created_at": "2022-10-18T05:22:49.487Z",
    "version": 1666073546365,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Lymphatic Drainage",
      "description": "Lymphatic Drainage Massage, Very Light touch massage service, Small Rhythmic strokes which help pump fluid to your lymph nodes and drain them through your circulatory system. Toxins get released through sweat, urinary system or bowel function",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "JXV2NHQAOKHO4A2ZAUESS6V4",
          "updated_at": "2022-10-18T06:12:26.365Z",
          "created_at": "2022-10-18T05:22:49.487Z",
          "version": 1666073546365,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "ZVZLVMLSAXFKWHJK52PTEABN",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 20000,
              "currency": "USD"
            },
            "service_duration": 3600000,
            "price_description": "$200",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Lymphatic Drainage Massage, Very Light touch massage service, Small Rhythmic strokes which help pump fluid to your lymph nodes and drain them through your circulatory system. Toxins get released through sweat, urinary system or bowel function</p>",
      "description_plaintext": "Lymphatic Drainage Massage, Very Light touch massage service, Small Rhythmic strokes which help pump fluid to your lymph nodes and drain them through your circulatory system. Toxins get released through sweat, urinary system or bowel function"
    }
  },
  {
    "type": "ITEM",
    "id": "2TY2QJR6XH2NHY44GFPTUPNY",
    "updated_at": "2022-10-18T06:12:40.177Z",
    "created_at": "2022-10-18T05:27:49.395Z",
    "version": 1666073560177,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Pre Natal Massage",
      "description": "Pre Natal Massage is a pregnancy massage. mother lays comfortably on her side during this massage. with nice calming ambiance and soothing music to calm mommy to be as baby feels pure relaxation through the hormones of beautiful momma",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "U7XOYPBGXASFFTNPF6QOFPPQ",
          "updated_at": "2022-10-18T06:12:40.177Z",
          "created_at": "2022-10-18T05:27:49.395Z",
          "version": 1666073560177,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "2TY2QJR6XH2NHY44GFPTUPNY",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 10000,
              "currency": "USD"
            },
            "service_duration": 3600000,
            "price_description": "$100",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Pre Natal Massage is a pregnancy massage. mother lays comfortably on her side during this massage. with nice calming ambiance and soothing music to calm mommy to be as baby feels pure relaxation through the hormones of beautiful momma</p>",
      "description_plaintext": "Pre Natal Massage is a pregnancy massage. mother lays comfortably on her side during this massage. with nice calming ambiance and soothing music to calm mommy to be as baby feels pure relaxation through the hormones of beautiful momma"
    }
  },
  {
    "type": "ITEM",
    "id": "3GTNMFQDHERACBGU7ZTSRFOJ",
    "updated_at": "2022-10-18T06:10:27.088Z",
    "created_at": "2022-10-18T05:31:57.586Z",
    "version": 1666073427088,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Couples Massage 60min",
      "description": "Enjoy a relaxing moment with you and a loved one with a couple massage. Choice of same room or seperate rooms. Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "E6FMSGDFKWHE2PIKSLYAO2NA",
          "updated_at": "2022-10-18T06:10:27.088Z",
          "created_at": "2022-10-18T05:31:57.586Z",
          "version": 1666073427088,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "3GTNMFQDHERACBGU7ZTSRFOJ",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 30000,
              "currency": "USD"
            },
            "service_duration": 3600000,
            "price_description": "$300",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Enjoy a relaxing moment with you and a loved one with a couple massage. Choice of same room or seperate rooms. Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea</p>",
      "description_plaintext": "Enjoy a relaxing moment with you and a loved one with a couple massage. Choice of same room or seperate rooms. Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea"
    }
  },
  {
    "type": "ITEM",
    "id": "MIAUGIGLPIDRNQDTBUA6RSLF",
    "updated_at": "2022-10-18T06:10:41.935Z",
    "created_at": "2022-10-18T05:40:00.555Z",
    "version": 1666073441935,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Couples Massage 90min",
      "description": "Enjoy a relaxing moment with you and a loved one with a couple massage. Choice of same room or seperate rooms. Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "42PFRRLJKIHHKJQVAPDIXVSU",
          "updated_at": "2022-10-18T06:10:41.935Z",
          "created_at": "2022-10-18T05:40:00.555Z",
          "version": 1666073441935,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "MIAUGIGLPIDRNQDTBUA6RSLF",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 40000,
              "currency": "USD"
            },
            "service_duration": 5400000,
            "price_description": "$400",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Enjoy a relaxing moment with you and a loved one with a couple massage. Choice of same room or seperate rooms. Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea</p>",
      "description_plaintext": "Enjoy a relaxing moment with you and a loved one with a couple massage. Choice of same room or seperate rooms. Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea"
    }
  },
  {
    "type": "ITEM",
    "id": "JYWJX2DQVWBUVFY6F7M3V2XT",
    "updated_at": "2022-10-18T06:11:47.281Z",
    "created_at": "2022-10-18T05:44:01.809Z",
    "version": 1666073507281,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Hot Stone Massage",
      "description": "Hot Stone Massage. is a Tranquil massage with the use of Lava Stones which hold heat for long periods of time. Enjoy a relaxing moment with Hot Stone massage. Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "I22CLY2C3V5F6YO6GFTRKWYY",
          "updated_at": "2022-10-18T06:11:47.281Z",
          "created_at": "2022-10-18T05:44:01.809Z",
          "version": 1666073507281,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "JYWJX2DQVWBUVFY6F7M3V2XT",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 18000,
              "currency": "USD"
            },
            "service_duration": 3600000,
            "price_description": "$180",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Hot Stone Massage. is a Tranquil massage with the use of Lava Stones which hold heat for long periods of time. Enjoy a relaxing moment with Hot Stone massage. Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea</p>",
      "description_plaintext": "Hot Stone Massage. is a Tranquil massage with the use of Lava Stones which hold heat for long periods of time. Enjoy a relaxing moment with Hot Stone massage. Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea"
    }
  },
  {
    "type": "ITEM",
    "id": "C5CBYJK5KY3Y5FQ6SXYF2H4F",
    "updated_at": "2022-10-18T06:10:10.151Z",
    "created_at": "2022-10-18T05:47:36.635Z",
    "version": 1666073410151,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "CBD Massage",
      "description": "Choice of ANY modality massage service. A Goddesses Touch provides CBD massages with 1,000mg. Helps increase Joint mobility and decrease inflammation. Enjoy a Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "XQ67G4MTMUPFXS34XSMVKLJT",
          "updated_at": "2022-10-18T06:10:10.151Z",
          "created_at": "2022-10-18T05:47:36.635Z",
          "version": 1666073410151,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "C5CBYJK5KY3Y5FQ6SXYF2H4F",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 18000,
              "currency": "USD"
            },
            "service_duration": 3600000,
            "price_description": "$180",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Choice of ANY modality massage service. A Goddesses Touch provides CBD massages with 1,000mg. Helps increase Joint mobility and decrease inflammation. Enjoy a Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea</p>",
      "description_plaintext": "Choice of ANY modality massage service. A Goddesses Touch provides CBD massages with 1,000mg. Helps increase Joint mobility and decrease inflammation. Enjoy a Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea"
    }
  },
  {
    "type": "ITEM",
    "id": "N4464A6BLVXK3NV7PKS4VQDJ",
    "updated_at": "2022-10-18T06:11:34.601Z",
    "created_at": "2022-10-18T05:51:44.549Z",
    "version": 1666073494601,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Four Hand Massage",
      "description": "4 hand Massage , Two Therapist working together in tandum to achieve total relaxation for the client. working on targeted muscles to release muscle tension. Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "LURHRH6METTNXJVXSAHQBVU7",
          "updated_at": "2022-10-18T06:11:34.601Z",
          "created_at": "2022-10-18T05:51:44.549Z",
          "version": 1666073494601,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "N4464A6BLVXK3NV7PKS4VQDJ",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 30000,
              "currency": "USD"
            },
            "service_duration": 3600000,
            "price_description": "$300",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>4 hand Massage , Two Therapist working together in tandum to achieve total relaxation for the client. working on targeted muscles to release muscle tension. Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea</p>",
      "description_plaintext": "4 hand Massage , Two Therapist working together in tandum to achieve total relaxation for the client. working on targeted muscles to release muscle tension. Calming relaxing Ambiance and soothing music. Hot Towel to ease muscle tension and aromatherapy provided. Choice of infused water or Herbal tea"
    }
  },
  {
    "type": "ITEM",
    "id": "I4NUTC2NAZVEHZDJTWGT3P54",
    "updated_at": "2022-10-18T05:58:43.384Z",
    "created_at": "2022-10-18T05:58:43.384Z",
    "version": 1666072723384,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Reiki Session",
      "description": "Reiki is a form of Energy Work. The Practitioner place hands above or on the client to clear any blockages the client may have causing stagnant energy. client will be fully clothed helping get energy back to a balance within the body feeling more energized and clear",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "NUQMCGEFDXYWX4BDXP4NVRSW",
          "updated_at": "2022-10-18T05:58:43.384Z",
          "created_at": "2022-10-18T05:58:43.384Z",
          "version": 1666072723384,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "I4NUTC2NAZVEHZDJTWGT3P54",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 13000,
              "currency": "USD"
            },
            "service_duration": 3600000,
            "price_description": "$130",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Reiki is a form of Energy Work. The Practitioner place hands above or on the client to clear any blockages the client may have causing stagnant energy. client will be fully clothed helping get energy back to a balance within the body feeling more energized and clear </p>",
      "description_plaintext": "Reiki is a form of Energy Work. The Practitioner place hands above or on the client to clear any blockages the client may have causing stagnant energy. client will be fully clothed helping get energy back to a balance within the body feeling more energized and clear"
    }
  },
  {
    "type": "ITEM",
    "id": "JLWQFVR5YVNEQWPRGT2Q2MKA",
    "updated_at": "2022-10-18T06:02:00.987Z",
    "created_at": "2022-10-18T06:02:00.987Z",
    "version": 1666072920987,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "In Home Massage",
      "description": "Want to be able to bring the relaxation of massage right to the comfort of your home? Book your massage to a therapist to come out to your home and create your home into a relaxing spa treatment",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "EFJZ3KNGG2G5XUHSOMMEYL4M",
          "updated_at": "2022-10-18T06:02:00.987Z",
          "created_at": "2022-10-18T06:02:00.987Z",
          "version": 1666072920987,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "JLWQFVR5YVNEQWPRGT2Q2MKA",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 20000,
              "currency": "USD"
            },
            "service_duration": 3600000,
            "price_description": "$200",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 5000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Want to be able to bring the relaxation of massage right to the comfort of your home? Book your massage to a therapist to come out to your home and create your home into a relaxing spa treatment</p>",
      "description_plaintext": "Want to be able to bring the relaxation of massage right to the comfort of your home? Book your massage to a therapist to come out to your home and create your home into a relaxing spa treatment"
    }
  },
  {
    "type": "ITEM",
    "id": "ROC4IHVSFJ5IWCIO4FQ5GA22",
    "updated_at": "2022-10-18T06:25:49.04Z",
    "created_at": "2022-10-18T06:09:54.621Z",
    "version": 1666074349040,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Body Contouring",
      "description": "Looking to Shape our Waist or get rid of unwanted Fat? Body Contouring Services consist of Wood Therapy, Cavitation, Radio Frequency, Laser Lipo & Butt Cupping Therapy. Each service individually is priced separately at 100.00 a piece. mix and match your Body Contouring sessions and create a package of your own",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "ZUL635FKQ45RYMITJWPXB5RC",
          "updated_at": "2022-10-18T06:09:54.621Z",
          "created_at": "2022-10-18T06:09:54.621Z",
          "version": 1666073394621,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "ROC4IHVSFJ5IWCIO4FQ5GA22",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 10000,
              "currency": "USD"
            },
            "service_duration": 2700000,
            "price_description": "$100",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Looking to Shape our Waist or get rid of unwanted Fat? Body Contouring Services consist of Wood Therapy, Cavitation, Radio Frequency, Laser Lipo &amp; Butt Cupping Therapy. Each service individually is priced separately at 100.00 a piece. mix and match your Body Contouring sessions and create a package of your own</p>",
      "description_plaintext": "Looking to Shape our Waist or get rid of unwanted Fat? Body Contouring Services consist of Wood Therapy, Cavitation, Radio Frequency, Laser Lipo & Butt Cupping Therapy. Each service individually is priced separately at 100.00 a piece. mix and match your Body Contouring sessions and create a package of your own"
    }
  },
  {
    "type": "ITEM",
    "id": "7SWGCMUHFE6LG4LG42QIP7WI",
    "updated_at": "2022-10-18T06:16:58.089Z",
    "created_at": "2022-10-18T06:16:58.089Z",
    "version": 1666073818089,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Hand & Foot scrub",
      "description": "Get soft with all natural sugar scrub. made with organic sugar cane. Hand and foot Massage provided with this service",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "7VS6TETWNX7DSLLBH43TQEL6",
          "updated_at": "2022-10-18T06:16:58.089Z",
          "created_at": "2022-10-18T06:16:58.089Z",
          "version": 1666073818089,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "7SWGCMUHFE6LG4LG42QIP7WI",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 8000,
              "currency": "USD"
            },
            "service_duration": 3600000,
            "price_description": "$80.00",
            "available_for_booking": true,
            "no_show_fee": {
              "amount": 3000,
              "currency": "USD"
            },
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Get soft with all natural sugar scrub. made with organic sugar cane. Hand and foot Massage provided with this service</p>",
      "description_plaintext": "Get soft with all natural sugar scrub. made with organic sugar cane. Hand and foot Massage provided with this service"
    }
  },
  {
    "type": "ITEM",
    "id": "DG3WYY7IFW6NJJTVUBP3SB45",
    "updated_at": "2022-10-20T04:13:34.125Z",
    "created_at": "2022-10-20T04:13:12.849Z",
    "version": 1666239214125,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Memberships",
      "description": "Memberships Subscriptions available! view our website at www.agoddessestouch.com \"memberships\" Call 916-515-8523 to Sign Up!!",
      "visibility": "PRIVATE",
      "category_id": "SG3TI46EX737IWVBCBEOCY2J",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "GI2QTCDZDJHWXQU4MQFKWLEE",
          "updated_at": "2022-10-20T04:13:34.125Z",
          "created_at": "2022-10-20T04:13:12.849Z",
          "version": 1666239214125,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "DG3WYY7IFW6NJJTVUBP3SB45",
            "name": "Regular",
            "ordinal": 1,
            "pricing_type": "VARIABLE_PRICING",
            "service_duration": 0,
            "price_description": "Call Us",
            "available_for_booking": false,
            "sellable": true,
            "stockable": true,
            "team_member_ids": [
              "TMSKmEjb_yJp84bA"
            ]
          }
        }
      ],
      "product_type": "APPOINTMENTS_SERVICE",
      "skip_modifier_screen": false,
      "ecom_visibility": "UNINDEXED",
      "description_html": "<p>Memberships Subscriptions available! view our website at www.agoddessestouch.com &#34;memberships&#34; Call 916-515-8523 to Sign Up!!</p>",
      "description_plaintext": "Memberships Subscriptions available! view our website at www.agoddessestouch.com \"memberships\" Call 916-515-8523 to Sign Up!!"
    }
  }
]
